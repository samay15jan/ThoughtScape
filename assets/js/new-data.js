
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
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var d = new Date();
  var month = months[d.getMonth()];
  var date = d.getDate();
  var outputDate = month + " " + date;

function save() {
  var title = document.getElementById("title").value;
  var content = document.getElementById("area").value;
  var ai = document.getElementById("center");
  var userId = localStorage.getItem('userId');
  var divContent = "";
  if (ai !== null) {
    divContent = ai.textContent;
  }

  db.collection("users")
    .doc(userId)
    .collection("Journals")
    .doc(outputDate)
    .set({
      A_Title: title,
      B_Content: content,
      C_Response: divContent
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
