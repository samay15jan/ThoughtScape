window.save = save;

async function placeholder() {
  const cachedResponse = await getFromIndexDB("responses", "realtime");
  const userName = cachedResponse.data.username;

  var textarea = document.getElementById("area");
  textarea.placeholder = "Hi " + userName + ", what's on your mind ?";
}
document.addEventListener("DOMContentLoaded", function () {
  placeholder();
});

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

async function save() {
  var title = document.getElementById("title").value;
  var content = document.getElementById("area").value;
  const cachedResRealtime = await getFromIndexDB("responses", "realtime");
  const email = cachedResRealtime.data.email;
  const key = cachedResRealtime.data.encrypt_key;

  if (!email || !key) {
    return;
  }

  // Function to encrypt data using AES
  function encryptData(data, key) {
    const encryptedData = CryptoJS.AES.encrypt(data, key).toString();
    return encryptedData;
  }

  // Encryption of data
  const encryptedTitle = encryptData(title, key);
  const encryptedContent = encryptData(content, key);

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0]; // "2025-01-25" format

  firebase.firestore().collection("Entries")
    .doc(email)
    .collection("Journal")
    .doc()
    .set({
      A_Title: encryptedTitle,
      B_Content: encryptedContent,
      D_Date: formattedDate,
    })
    .then(function () {
      var output = document.getElementById("output");
      output.innerHTML = "Saved !!";
      output.style.display = "block";
      setTimeout(function () {
        output.innerText = "";
        output.style.display = "none";
      }, 3000);
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
      var output = document.getElementById("output");
      output.innerHTML = "Somethings wrong, someone look for admin";
      output.style.display = "block";
      setTimeout(function () {
        output.innerText = "";
        output.style.display = "none";
      }, 3000);
    });
}
