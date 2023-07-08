// Firebase Initilization
var userId = localStorage.getItem('userId');
var loc = document.getElementById('email');
loc.innerHTML = userId;

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
var userId = firebase.auth().currentUser;



// Total Entries
function getCount() {
  db.collection("Entries")
    .doc(userId)
    .collection("Journal")
    .get()
    .then((querySnapshot) => {
      var count = querySnapshot.size;
      var output = document.getElementById("count");
      output.innerHTML = "Total Number Of Entries: " + count;
    })
    .catch(function (error) {
      console.error("Error getting documents: ", error);
    });
}

getCount();



// Sign Out
firebase.auth().signOut()
  .then(() => {
    alert('User logged out successfully.');
  })
  .catch((error) => {
    alert('Error logging out:', error);
  });



// Delete account 
function deleteAccount() {
  userId.delete()
  .then(() => {
    alert('Account deleted successfully.');
  })
  .catch((error) => {
    alert('Error deleting account:', error);
  });
}



// Password Reset
firebase.auth().sendPasswordResetEmail(userId)
  .then(() => {
    alert('Password reset email sent successfully.');
  })
  .catch((error) => {
    alert('Error sending password reset email:', error);
  });



// Complete Profile
var usernameCheck = document.getElementById('username').innerHTML.trim();
if(usernameCheck !== ""){
  console.log("User Profile Looks Perfect");
} 
else{
  var completeProfile = document.getElementById('completeProfile');
  var avatar = document.getElementById('avatar');
  var username = document.getElementById('username');

  var addUsername = document.createElement("input");
  addUsername.className = "input-box";
  addUsername.type = "text";
  addUsername.placeholder = "Enter your username";


  var option1 = document.createElement("option");
  option1.innerHTML = "Light Theme";
  option1.value = "light";

  var option2 = document.createElement("option");
  option1.innerHTML = "Dark Theme";
  option1.value = "dark";


  var selectTheme = document.createElement("div");
  selectTheme.id = "myTheme";
  selectTheme.appendChild(option1);
  selectTheme.appendChild(option2);


  var emailsON = document.createElement("option");
  option1.innerHTML = "Alerts ON";
  option1.value = "on";
  
  var emailsOFF = document.createElement("option");
  option1.innerHTML = "Alerts OFF";
  option1.value = "off";


  var selectTheme = document.createElement("div");
  selectTheme.id = "emailAlerts";
  selectTheme.appendChild(emailsON);
  selectTheme.appendChild(emailsOFF);

};

//add in above
function save() {
  var dropdown = document.getElementById("myTheme");
  var selectedValue = dropdown.value;
  console.log("Selected value: " + selectedValue);
}


const username = "example_user";
const userProfile = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  // Other profile data...
};

// Get a reference to the Firestore document for the user
const userDocRef = firebase.firestore().collection("users").doc(user.uid);

// Create or update the document with the username and user profile
userDocRef.set({
  username: username,
  profile: userProfile
}, { merge: true })
  .then(() => {
    console.log("Username and user profile data added successfully.");
  })
  .catch((error) => {
    console.error("Error adding username and user profile data:", error);
  });
