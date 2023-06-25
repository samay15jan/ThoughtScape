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
      document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
  
        var email = document.getElementById('login-email').value;
        var password = document.getElementById('login-password').value;
  
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(function(userCredential) {
            // Login successful
            var user = userCredential.user;
            if (user.emailVerified) {
              // Email is verified, proceed to authenticated area
              localStorage.setItem('userId', user.email); // Store the user ID in local storage
              console.log(user.email)
              alert('Login successful.');
            } else {
              // Email is not verified
              alert('Login successful. Please verify your email.');
            }
          })
          .catch(function(error) {
            // Login failed
            console.error(error);
          });
      });