window.sendEmail = sendEmail

const navbar = document.getElementById('nav-bar');
const navbutton = document.getElementById('nav-button');
navbutton.addEventListener("click", () =>{
    navbar.classList.toggle('hidden');
})

//Email Query
function sendEmail(){
var name = document.getElementById('full-name').value;
var email = document.getElementById('email').value;
var comment = document.getElementById('message').value;
Email.send({
  Host : "smtp.elasticemail.com",
  Username : "zeus15jan@gmail.com",
  Password : "7CCB6AB173D8BB2D49CAE9731B956F464BB5",
  To : "zeus15jan@gmail.com",
  From : "zeus15jan@gmail.com",
  Subject : "New User",
  Body : "Username: " + name + " <br> Email: " + email + " <br> Comment: " + comment,
}).then(message => {
  var send = document.getElementById("result");
  send.innerHTML = message + ". We will get back to you ASAP.";
})
;}


   // Initialize ScrollReveal
   const sr = ScrollReveal({
    distance: '100px', 
    duration: 1000,   
    easing: 'ease',   
    mobile: true      
  });

  sr.reveal('.animate-1', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-2', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-3-1', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-3-2', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-4-1', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-4-2', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-5-1', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-5-2', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-61', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-6-2', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-7-1', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-7-2', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-8', {
    origin: 'bottom',  
    interval: 500     
    
  })
  sr.reveal('.animate-9', {
    origin: 'bottom',  
    interval: 500     
    
  })  