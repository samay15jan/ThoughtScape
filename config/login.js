      // Login Form Submit Handler
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