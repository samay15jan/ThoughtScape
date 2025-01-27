// Firebase Initialization
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
var auth = firebase.auth()

  auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "/auth";
    }
  });
