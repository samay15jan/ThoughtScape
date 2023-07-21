
var firebaseConfig = {
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

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.toLocaleString('default', { month: 'long' });
const formattedDate = `${day} ${month}`;

function placeholder(){
  var UserName = localStorage.getItem('username');
  var textarea = document.getElementById("area");
  textarea.placeholder = "Hi " + UserName + ", what's on your mind ?";
}
document.addEventListener("DOMContentLoaded", function() {
  placeholder();
});
function save() {
  var title = document.getElementById("title").value;
  var content = document.getElementById("area").value;
  var userId = localStorage.getItem('userId');

  db.collection("Entries")
    .doc(userId)
    .collection("Journal")
    .doc()
    .set({
      A_Title: title,
      B_Content: content,
      D_Date: formattedDate
    })
    .then(function() {
      var output = document.getElementById("output");
      output.innerHTML = "Saved !!";
      output.style.display = "block";
      setTimeout(function() {
        output.innerText = "";
        output.style.display = "none";
      }, 3000);
    })
    
    .catch(function(error) {
      console.error("Error writing document: ", error);
      var output = document.getElementById("output");
      output.innerHTML = "Somethings wrong, someone look for admin";
      output.style.display = "block";
      setTimeout(function() {
        output.innerText = "";
        output.style.display = "none";
      }, 3000);
    });
}

