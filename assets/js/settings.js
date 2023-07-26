// Firebase Initilization
var userId = localStorage.getItem('userId');

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

var db = firebase.firestore();

// Getting basic details 
 
function  basicDetails(){
  // Getting Username
  db.collection("Entries")
    .doc(userId)
    .get()
    .then((doc) => {
        const entryData = doc.data();
        var UserName = entryData.username;
        var usernameLoc = document.getElementById("usernameLoc");
        usernameLoc.innerHTML = "Username: " + UserName;
        localStorage.setItem('username', UserName);
  // Getting Email Address
  var emailLocation = document.getElementById('email');
  emailLocation.innerHTML = "Email Address: " + userId;
  })
  // Getting Total Entries
  db.collection("Entries")
  .doc(userId)
  .collection("Journal")
  .get()
  .then((querySnapshot) => {
    var count = querySnapshot.size;
    var output = document.getElementById("count");
    output.innerHTML = "Total Number Of Entries: " + count;
  })

}
basicDetails();


function logout() {
  firebase.auth().signOut().then(() => {
    window.parent.location.href = "/pages/auth.html";
  }).catch((error) => {
    // Handle logout errors here
    console.error("Logout failed: ", error.message);
    alert("Logout failed. Please try again.");
  });
}


// Complete Profile
var usernameCheck = document.getElementById('username').innerHTML.trim();
if(usernameCheck !== ""){
  console.log("User Profile Looks Perfect");
} 
else{
  var completeProfile = document.getElementById('completeProfile');

  var addUsername = document.createElement("input");
  addUsername.id = "addUsername"
  addUsername.className = "input-box";
  addUsername.type = "text";
  addUsername.placeholder = "Enter your username";

  var userButton = document.createElement("button");
  userButton.className = "button";
  userButton.id = "buttonId";
  userButton.onclick = save;
  userButton.innerHTML = "Save";
  
  function save(){
    var finalUsername = addUsername.value;
    var userId = localStorage.getItem('userId');
    const userDocRef = firebase.firestore().collection("Entries").doc(userId);
    userDocRef.set({
      username: finalUsername,
    }, { merge: true })
    .then(() => {
      console.log("Username data added successfully.");
    })
    .catch((error) => {
      console.error("Error adding username and user profile data:", error);
    });
  }

  completeProfile.appendChild(addUsername);
  completeProfile.appendChild(userButton);
};

