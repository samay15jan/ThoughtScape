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
    v.className = 'bg-gray-800 text-white rounded-xl p-2 lg:ml-20 lg:ml-64 mx-10 w-4/5 lg:w-2/3 textarea drop-shadow-xl h-3/5';
    w.className = 'bg-gray-800 text-white rounded-xl p-2 lg:ml-20 lg:ml-64 lg:w-2/3 mx-10 w-4/5 textarea mb-4 drop-shadow-xl;';
    x.className = 'dark-theme';
    y.style = 'color:white; background-color: transparent; border: none;';
    z.src = "/assets/images/toggle-sun.svg";
  }
  else {
    t.className = 'bottom-items css-button-sliding-to-top--black1'
    u.className = 'bottom-items css-button-sliding-to-top--black1'
    v.className = 'bg-white rounded-xl p-2 lg:ml-20 lg:ml-64 mx-10 w-4/5 lg:w-2/3 textarea drop-shadow-xl h-3/5';
    w.className = 'bg-white rounded-xl p-2 lg:ml-20 lg:ml-64 lg:w-2/3 mx-10 w-4/5 textarea mb-4 drop-shadow-xl';
    x.className = 'light-theme';
    y.style = 'color:black; background-color: transparent; border: none;';
    z.src = '/assets/images/toggle-moon.svg';
  }
}