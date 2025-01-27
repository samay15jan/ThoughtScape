window.login = login;
window.register = register;

// Firebase Initialization
var firebaseConfig = {
  apiKey: "AIzaSyDead-k6wjCzNLi4gVS9VL4whIIxgexNr8",
  authDomain: "thoughtscape.firebaseapp.com",
  databaseURL: "https://thoughtscape-default-rtdb.firebaseio.com",
  projectId: "thoughtscape",
  storageBucket: "thoughtscape.appspot.com",
  messagingSenderId: "446236101890",
  appId: "1:446236101890:web:496f25d21ea3703cf0861b",
  measurementId: "G-VHY3SZK6FN",
};

firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();
var database = firebase.database();

// Register
async function register() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var output_result = document.getElementById("output_result");

  // validating data
  if (validate_username(username) == false) {
    return;
  }
  if (validate_email(email) == false || validate_password(password) == false) {
    return;
  }
  // Authentication
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    var user = auth.currentUser;
    await saveToIndexedDB("responses", { url: "id", data: user.uid });

    // Add this user to Firebase Database
    var database_ref = database.ref();

    // Create User data
    var user_data = {
      email: email,
      username: username,
      encrypt_key: generateSecureKey(),
    };
    database_ref.child("users/" + user.uid).set(user_data);
    output_result.className = "text-base text-green-500";
    output_result.innerHTML = "User Registered Successfully.";
    login();
  } catch (error) {
    output_result.innerHTML = error;
  }
}

// Login
async function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var output_result = document.getElementById("output_result");

  if (validate_email(email) == false || validate_password(password) == false) {
    return;
  }

  try {
    await auth.signInWithEmailAndPassword(email, password);
    var user = auth.currentUser;
    const databaseRef = database.ref("users/" + user.uid);
    const snapshot = await databaseRef.once("value");
    const userData = snapshot.val();
    await saveToIndexedDB("responses", { url: "id", data: user.uid });
    await saveToIndexedDB("responses", {
      url: "realtime",
      data: {
        email: userData.email,
        username: userData.username,
        encrypt_key: userData.encrypt_key,
      },
    });
    output_result.className = "text-base text-green-500";
    output_result.innerHTML = "User Logged In Successfully...";
    window.location.href = "/main";
  } catch (error) {
    output_result.innerHTML = error.message;
  }
}

// Validate Functions
function validate_username(username) {
  if (username == null) {
    output_result.innerHTML = "Username cannot be empty";
    return false;
  }

  if (username.length <= 0) {
    output_result.innerHTML = "Username cannot be empty";
    return false;
  } else {
    return true;
  }
}
function validate_email(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    return true;
  } else {
    output_result.innerHTML = "Incorrect Email Format";
    return false;
  }
}
function validate_password(password) {
  if (password.length < 6) {
    output_result.innerHTML = "Password too short";
    return false;
  } else {
    return true;
  }
}

function generateSecureKey() {
  const array = new Uint8Array(32);
  window.crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}
