var firebaseConfig = {
  apiKey: "AIzaSyDead-k6wjCzNLi4gVS9VL4whIIxgexNr8",
  authDomain: "thoughtscape.firebaseapp.com",
  databaseURL: "https://thoughtscape-default-rtdb.firebaseio.com",
  projectId: "thoughtscape",
  storageBucket: "thoughtscape.appspot.com",
  messagingSenderId: "446236101890",
  appId: "1:446236101890:web:496f25d21ea3703cf0861b",
  measurementId: "G-VHY3SZK6FN",
};

firebase.initializeApp(firebaseConfig);
var realtimeDB = firebase.database();
var db = firebase.firestore();

getFirestoreDB();

// Get Firestore Data
async function getFirestoreDB() {
  try {
    const decryptedEntries = [];

    const cachedResRealtime = await getFromIndexDB("responses", "realtime");
    const email = cachedResRealtime.data.email;
    const key = cachedResRealtime.data.encrypt_key;
    if (!email) return;

    const querySnapshot = await db
      .collection("Entries")
      .doc(email)
      .collection("Journal")
      .orderBy("D_Date", "desc")
      .get();

    for (const doc of querySnapshot.docs) {
      const entryData = doc.data();
      const decryptedEntry = await handleDecryption(entryData, key);
      decryptedEntries.push(decryptedEntry);
    }
    
    formatEntries(decryptedEntries);
  } catch (error) {
    console.error("Error getting documents from Firebase:", error);
  }
}

// Format Entries to HTML (DOM Manipulation)
async function formatEntries(entries) {
  if (!entries) return;

  entries.forEach((entry) => {
    const A_title = entry.A_title;
    const B_content = entry.B_content;
    const B_content_short = B_content.slice(0, 200) + ".....read more";
    const D_date = entry.D_date;

    // Create HTML elements
    const titleElement = document.createElement("H4");
    titleElement.textContent = A_title;
    titleElement.className = "font-medium";

    const contentElement = document.createElement("p");
    contentElement.textContent = B_content_short;
    contentElement.className = "text-sm";

    const dateElement = document.createElement("H4");
    const dateObject = new Date(D_date);
    const options = { day: "numeric", month: "short" };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);
    dateElement.textContent = formattedDate;

    const dateCard = document.createElement("div");
    dateCard.className = "card";
    dateCard.appendChild(dateElement);

    const containerLeft = document.createElement("div");
    containerLeft.appendChild(dateCard);

    const containerRight = document.createElement("div");
    containerRight.appendChild(titleElement);
    containerRight.appendChild(contentElement);

    const parentElement = document.createElement("div");
    parentElement.className = "content drop-shadow-lg";
    parentElement.style = "margin: 20px";
    parentElement.appendChild(containerLeft);
    parentElement.appendChild(containerRight);

    parentElement.onclick = function on() {
      const overlay = document.getElementById("overlay");
      overlay.style.display = "block";
      const expand = document.getElementById("text");
      expand.textContent = B_content;
      expand.className = "content-overlay text-lg mx-10 my-5";
    };

    const finalParentElement = document.getElementById("titles-container");
    finalParentElement.className = "parent-content animate-3";
    finalParentElement.appendChild(parentElement);
  });
}

// Handle Entries Decryption
async function handleDecryption(entryData, key) {
  if (!entryData && !key) return;

  const decryptedTitle = CryptoJS.AES.decrypt(entryData.A_Title, key).toString(
    CryptoJS.enc.Utf8
  );
  const decryptedContent = CryptoJS.AES.decrypt(
    entryData.B_Content,
    key
  ).toString(CryptoJS.enc.Utf8);
  const date = entryData.D_Date;

  const decryptedData = {
    A_title: decryptedTitle,
    B_content: decryptedContent,
    D_date: date,
  };
  return decryptedData;
}

// Greetings
async function greet() {
  var greetings = document.getElementById("greet");
  const cachedResponse = await getFromIndexDB("responses", "realtime");
  const userName = cachedResponse.data.username;

  var time = new Date();
  var hours = time.getHours();
  if (hours >= 0 && hours < 12) {
    greetings.innerHTML = "Good Morning, " + userName;
  } else if (hours >= 12 && hours < 18) {
    greetings.innerHTML = "Good Afternoon, " + userName;
  } else {
    greetings.innerHTML = "Good Evening, " + userName;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  greet();
});

function off() {
  document.getElementById("overlay").style.display = "none";
}
