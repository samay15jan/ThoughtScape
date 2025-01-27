// This function is for dark theme toggle
function toggletheme(){
  let x = document.getElementById("theme");
  let y = document.getElementById("toggle1")
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
