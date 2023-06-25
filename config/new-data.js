
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

function save() {
  var title = document.getElementById("title").value;
  var content = document.getElementById("area").value;
  var userId = localStorage.getItem('userId');

  db.collection("users")
    .doc(userId)
    .collection("Titles")
    .doc(title)
    .set({
      content: content
    })
    .then(function() {
      var output = document.getElementById("output");
      output.innerHTML = "Saved";
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
