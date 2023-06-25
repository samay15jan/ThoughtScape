// This function is for dark theme toggle
function toggletheme(){
  let t = document.getElementById("buttons1")
  let u = document.getElementById("buttons2")
  let v = document.getElementById("area")
  let w = document.getElementById("title")
  let x = document.getElementById("theme");
  let y = document.getElementById("toggle1")
  let z = document.getElementById("toggle2")
  if (x.className === 'light-theme'){
    t.className = 'bottom-items css-button-sliding-to-top--black2'
    u.className = 'bottom-items css-button-sliding-to-top--black2'
    v.style = 'color: #d1d1e9;';
    w.style = 'color: #d1d1e9;';
    x.className = 'dark-theme';
    y.style = ' width: 6%; color:white; background-color: transparent; border: none;';
    z.src = '/sources/toggle_sun.svg'
  }
  else {
    t.className = 'bottom-items css-button-sliding-to-top--black1'
    u.className = 'bottom-items css-button-sliding-to-top--black1'
    v.style = 'color: #212529;';
    w.style = 'color: #212529;';
    x.className = 'light-theme';
    y.style = 'width: 6%; color:black; background-color: transparent; border: none;';
    z.src = '/sources/toggle_moon.svg'
  }
}