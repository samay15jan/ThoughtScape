// Firebase Initialization
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
  
// Login 
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;
  var output = document.getElementById('output');
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      var user = userCredential.user;
      if (user.emailVerified) {
        localStorage.setItem('userId', user.email);
        output.innerHTML = 'Login successful. Redirecting...';
        location.replace('/app.html');
      } else {
        output.innerHTML = 'Login successful. Please verify your email.';
      }
    })
    .catch(function(error) {
      output.innerHTML = 'An error has occurred. Check logs';
      console.error(error);
    });
});
