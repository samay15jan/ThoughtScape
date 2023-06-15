// This function is for dark theme toggle
function toggletheme(){
  let x = document.getElementById("theme");
  let y = document.getElementById("toggle1")
  let z = document.getElementById("toggle2")
  if (x.className === 'light-theme'){
    x.className = 'dark-theme';
    y.style = ' width: 4%; color:white; background-color: transparent; border: none;';
    z.src = '/sources/toggle_sun.svg'
  }
  else {
    x.className = 'light-theme';
    y.style = 'width: 4%; color:black; background-color: transparent; border: none;';
    z.src = '/sources/toggle_moon.svg'
  }
}

