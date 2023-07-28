var userId = localStorage.getItem('email');
var UserName = localStorage.getItem('username');

function sendmail(){
var comment = document.getElementById('inputBox').value;
Email.send({
  Host : "smtp.elasticemail.com",
  Username : "zeus15jan@gmail.com",
  Password : "7CCB6AB173D8BB2D49CAE9731B956F464BB5",
  To : "zeus15jan@gmail.com",
  From : "zeus15jan@gmail.com",
  Subject : "User Request",
  Body : "Username: " + UserName + " <br> Email: " + userId + " <br> Comment: " + comment,
}).then(message => {
  var send = document.getElementById("result");
  send.innerHTML = message + ". We will get back to you ASAP.";
})
;}