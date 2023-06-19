// This function is for dark theme toggle
function toggletheme(){
  let x = document.getElementById("theme");
  let y = document.getElementById("toggle1")
  let z = document.getElementById("toggle2")
  if (x.className === 'light-theme'){
    x.className = 'dark-theme';
    y.style = ' width: 6%; color:white; background-color: transparent; border: none;';
    z.src = '/sources/toggle_sun.svg'
  }
  else {
    x.className = 'light-theme';
    y.style = 'width: 6%; color:black; background-color: transparent; border: none;';
    z.src = '/sources/toggle_moon.svg'
  }
}

// Random Quote
const QuotesFile = "/sources/quotes.txt";

async function quote(QuotesFile) {
  const response = await fetch(QuotesFile);
  const text = await response.text();
  const randomline = Math.floor(Math.random() * 250);
  const lines = text.split('\n'); 
  const quote = lines[randomline];
  document.getElementById("quote").innerHTML = quote;
}
quote(QuotesFile)

// Iframe
function frame(source) {
  document.getElementById('iframe').src = source;
}


// Boot logo
setTimeout(function() {
  var bootLogo = document.getElementById('boot-logo');
  bootLogo.style.display = 'none';
}, 1000);

function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}





function handleGoogleOneTapResponse(response) {
  var credential = response.credential;
  var idToken = credential.idToken;
  var decodedToken = JSON.parse(atob(idToken.split('.')[1]));
  var email = decodedToken.email;
  var name = decodedToken.name;
  var picture = decodedToken.picture;
}

  // Greetings
  var greetings = document.getElementById("greet");
  var time = new Date();
  var hours = time.getHours();
  if (hours >= 0 && hours < 12){
    greetings.innerHTML = 'Good Morning,';
  }
  else if (hours >= 12 && hours < 18){
    greetings.innerHTML = 'Good Afternoon,';
  }
  else {
    greetings.innerHTML = 'Good Evening,';
  }
