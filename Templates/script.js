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

// Popup window
function PopupFrame(expand){
  document.getElementById('popup-frame').src = expand
}