function off() {
  document.getElementById("overlay").style.display = "none";
}

const firebaseConfig = {
  apiKey: "AIzaSyDead-k6wjCzNLi4gVS9VL4whIIxgexNr8",
  authDomain: "thoughtscape.firebaseapp.com",
  databaseURL: "https://thoughtscape-default-rtdb.firebaseio.com",
  projectId: "thoughtscape",
  storageBucket: "thoughtscape.appspot.com",
  messagingSenderId: "446236101890",
  appId: "1:446236101890:web:496f25d21ea3703cf0861b",
  measurementId: "G-VHY3SZK6FN"
};

firebase.initializeApp(firebaseConfig);

function realtimeDatabase(){
  const userId = localStorage.getItem('userId');
  if (userId) {
    const databaseRef = firebase.database().ref('users/' + userId);
    databaseRef.once('value')
      .then((snapshot) => {
        const current_user_email = snapshot.val().email;
        const current_user_key = snapshot.val().encrypt_key;
        const current_user_username = snapshot.val().username;
        localStorage.setItem('email', current_user_email);
        localStorage.setItem('key', current_user_key);
        localStorage.setItem('username', current_user_username);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
    });
} else {
  console.error("User not authenticated.");
}};

realtimeDatabase();


var db = firebase.firestore();
const email = localStorage.getItem('email');
function getData() {
  db.collection("Entries")
    .doc(email)
    .collection("Journal")
    .orderBy("D_Date", "desc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const entryData = doc.data();
        var A_title = entryData.A_Title;
        var content = entryData.B_Content;
        var B_content = content.slice(0,200) + ".....read more";
        var D_date = entryData.D_Date;


        var titleElement = document.createElement("H4");
        titleElement.textContent = A_title;
        titleElement.className = "font-medium";

        var contentElement = document.createElement("p");
        contentElement.textContent = B_content;
        contentElement.className = "text-sm";

        var dateElement = document.createElement("H4");
        dateElement.textContent = D_date;

        var dateCard = document.createElement("div");
        dateCard.className = "card";        
        dateCard.appendChild(dateElement);

        var containerLeft = document.createElement("div");
        containerLeft.appendChild(dateCard);

        var containerRight = document.createElement("div");
        containerRight.appendChild(titleElement);
        containerRight.appendChild(contentElement);


        var parentElement = document.createElement("div");
        parentElement.className = "content drop-shadow-lg";
        parentElement.style = "margin: 20px";
        parentElement.appendChild(containerLeft);
        parentElement.appendChild(containerRight);
        parentElement.onclick =function on() {
            var overlay = document.getElementById("overlay");
            overlay.style.display = "block";
            var expand = document.getElementById("text");
            expand.textContent = content;
            expand.className = "content-overlay text-lg mx-10 my-5";
          };

        var finalparentElement = document.getElementById("titles-container");
        finalparentElement.className = "parent-content animate-3";
        finalparentElement.appendChild(parentElement);      
      });
    })
    .catch(function(error) {
      console.error("Error getting documents: ", error);
    });
}
getData();

// Greetings
var greetings = document.getElementById("greet");
var UserName = localStorage.getItem('username');
var time = new Date();
var hours = time.getHours();
if (hours >= 0 && hours < 12){
  greetings.innerHTML = 'Good Morning, ' + UserName;
}
else if (hours >= 12 && hours < 18){
  greetings.innerHTML = 'Good Afternoon, ' + UserName;
}
else {
  greetings.innerHTML = 'Good Evening, ' + UserName;
}