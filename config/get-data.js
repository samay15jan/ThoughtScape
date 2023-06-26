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
var userId = localStorage.getItem('userId');

function getData() {
  db.collection("users")
    .doc(userId)
    .collection("Titles")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var data = doc.data();
        var title = doc.id;
        var content = data.content;
        // Create elements to display title and content
        var titleElement = document.createElement("h5");
        titleElement.className = "rightportion";
        titleElement.textContent = title;

        var contentElement = document.createElement("p");
        content.className = "rightportion";
        contentElement.textContent = content;

        // Append elements to a container
        var container = document.createElement("div");
        container.className = "rightportion";
        container.appendChild(titleElement);
        container.appendChild(contentElement);

        // Append container to a parent element
        var parentElement = document.createElement("titles-container");
        parentElement.className = "content";
        parentElement.style = "margin: 20px;";
        parentElement.appendChild(container);

        var finalparentElement = document.getElementById("titles-container");
        finalparentElement.className = "parent-content";
        finalparentElement.appendChild(parentElement);

        
      });
    })
    .catch(function(error) {
      console.error("Error getting documents: ", error);
    });
}

getData()