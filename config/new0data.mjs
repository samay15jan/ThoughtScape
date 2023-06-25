
  import firebase from "firebase/app";
  import "firebase/firestore";
    
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


    const db = firebase.firestore();
    

  var data = document.getElementById("area").value;
  var heading = document.getElementById("title").value;
  const docRef = doc(db, "users");
// Add a new document in collection "cities"
function save(){
db.collection("users").doc("oIxhsRbxeRDJlUAEG81s ").set({
  name: "Los Angeles",
  state: "CA",
  country: "USA"
})
.then(() => {
  console.log("Document successfully written!");
})
.catch((error) => {
  console.error("Error writing document: ", error);
});}
save()
