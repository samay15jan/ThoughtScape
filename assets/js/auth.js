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
const auth = firebase.auth();
const database = firebase.database();

// Register
function register(){
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var output_result = document.getElementById("output_result");
  const generatedKey = generateKey();
  // validating data
  if (validate_username(username) == false){
    return
  }
  if (validate_email(email) == false || validate_password(password) == false) {
    return
  }
  // Authentication
  auth.createUserWithEmailAndPassword(email, password)
  .then(function(){
    var user = auth.currentUser
    // Add this user to Firebase Database
    var database_ref = database.ref() 

    // Create User data
    var user_data = {
      email : email,
      username : username,
      last_login : Date.now(),
      encrypt_key : generatedKey
    }
    database_ref.child('users/' + user.uid).set(user_data)
    output_result.innerHTML = "User Registered Successfully."
  })
  .catch(function(error){
    output_result.innerHTML = error;
  })
}

// Login
function login(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var output_result = document.getElementById("output_result");
  // validating data
  if (validate_email(email) == false || validate_password(password) == false) {
    return
  }
  auth.signInWithEmailAndPassword(email, password)
  .then(function(){
    var user = auth.currentUser;
    localStorage.setItem('userId', user.uid);
    // Add this user to Firebase Database
    var database_ref = database.ref()
    // Update User data
    var user_data = {
      last_login : Date.now()
    }  
    database_ref.child('users/' + user.uid).update(user_data)
    output_result.className = "text-base text-green-500";
    output_result.innerHTML = "User Logged In Sucessfully..."
    window.location.href = "/app.html";
  })
  .catch(function(error){
    output_result.innerHTML = error;
  })
}

// Validate Functions
function validate_username(username) {
  if (username == null) {
    output_result.innerHTML = "Username cannot be empty";
    return false
  }

  if (username.length <= 0 ) {
    output_result.innerHTML = "Username cannot be empty";
    return false
  }
  else {
    return true
  }
}
function validate_email(email){
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    return true
  } else {
    output_result.innerHTML = "Incorrect Email Format";
    return false
  }
}
function validate_password(password){
  if (password.length < 6) {
    output_result.innerHTML = "Password too short";
    return false
  } else {
    return true 
  }
}

// Function to generate a random encryption key
function generateKey() {
  const keyLength = 32;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < keyLength; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return key;
}
