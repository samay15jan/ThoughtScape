    // Registration Form Submit Handler
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

  