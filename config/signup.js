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
    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault();
  
        var email = document.getElementById('register-email').value;
        var password = document.getElementById('register-password').value;
  
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(function(userCredential) {
            // Registration successful, email verification sent
            var user = userCredential.user;
            user.sendEmailVerification().then(function() {
              // Email verification sent
              alert('Registration successful. Verification email sent.');
            }).catch(function(error) {
              // An error happened
              console.error(error);
            });
          })
          .catch(function(error) {
            // Registration failed
            console.error(error);
          });
      });

  