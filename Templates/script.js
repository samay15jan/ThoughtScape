function toggletheme(){
  var x = document.getElementById("theme");
  if (x.className === 'light-theme'){
    x.className = 'dark-theme';
  }
  else {
    x.className = 'light-theme';
  }
}
