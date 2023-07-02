
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
        var content = entryData.B_Content;
        var B_content = content.slice(0,200) + " ....read more";
        var D_date = entryData.D_Date;


        var titleElement = document.createElement("H4");
        titleElement.textContent = A_title;

        var contentElement = document.createElement("p");
        contentElement.textContent = B_content;

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
        parentElement.className = "content";
        parentElement.style = "margin: 20px; box-shadow: 0px 0px 3px 0px grey;";
        parentElement.appendChild(containerLeft);
        parentElement.appendChild(containerRight);
        parentElement.onclick =function on() {
            var overlay = document.getElementById("overlay");
            overlay.style.display = "block";
            var expand = document.getElementById("text");
            expand.textContent = content;
            expand.className = "content-overlay";
          };

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
