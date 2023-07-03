// fix it
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

async function insights(){
  const data = collection(db, "Entries", userId, "Journals" );
  const snapshot = await getCountFromServer(data);
  console.log('count: ', snapshot.data().count);
};

insights()

  