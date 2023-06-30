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
  db.collection("Entries")
    .doc(userId)
    .collection("Journal")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const entryData = doc.data();
        var A_title = entryData.A_Title;
        var B_content = entryData.B_Content;
        var C_response = entryData.C_Response;
        var D_date = entryData.D_Date.toDate();

        var dateElement = document.createElement("div");
        dateElement.className = "rightportion";
        dateElement.textContent = D_date;

        var titleElement = document.createElement("H4");
        titleElement.className = "rightportion";
        titleElement.textContent = A_title;

        var contentElement = document.createElement("p");
        contentElement.className = "rightportion";
        contentElement.textContent = B_content;
        
        var responseElement = document.createElement("div");
        responseElement.className = "rightportion";
        responseElement.textContent = C_response;

        var container = document.createElement("div");
        container.className = "rightportion";
        container.appendChild(titleElement);
        container.appendChild(contentElement);
        container.appendChild(responseElement);
        container.appendChild(dateElement);

        var parentElement = document.createElement("div");
        parentElement.className = "content";
        parentElement.style = "margin: 20px; box-shadow: 0px 0px 3px 0px grey;";
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