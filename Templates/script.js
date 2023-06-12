function toggletheme(){
  var x = document.getElementById("theme");
  var y = document.getElementById("toggle1")
  var z = document.getElementById("toggle2")
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
