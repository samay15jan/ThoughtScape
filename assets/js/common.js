// This function is for dark theme toggle
function toggletheme(){
  let x = document.getElementById("theme");
  let y = document.getElementById("toggle1")
  let z = document.getElementById("toggle2")
  if (x.className === 'light-theme'){
    x.className = 'dark-theme';
    y.style = 'color:white; background-color: transparent; border: none;';
    z.src = '/assets/images/toggle-sun.svg'
  }
  else {
    x.className = 'light-theme';
    y.style = 'color:black; background-color: transparent; border: none;';
    z.src = '/assets/images/toggle-moon.svg'
  }
}

// Random Quote
const QuotesFile = "/resources/quotes.txt";

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




// Greetings
  var greetings = document.getElementById("greet");
  var UserName = localStorage.getItem('username');
  var time = new Date();
  var hours = time.getHours();
  if (hours >= 0 && hours < 12){
    greetings.innerHTML = 'Good Morning, ' + UserName;
  }
  else if (hours >= 12 && hours < 18){
    greetings.innerHTML = 'Good Afternoon, ' + UserName;
  }
  else {
    greetings.innerHTML = 'Good Evening, ' + UserName;
  }


