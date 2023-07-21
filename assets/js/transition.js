   // Initialize ScrollReveal
   const sr = ScrollReveal({
    distance: '100px', 
    duration: 1000,   
    easing: 'ease',   
    mobile: true      
  });
  
  sr.reveal('.animate-1', {
    origin: 'top',  
    interval: 500     
  })

  sr.reveal('.animate-2', {
    origin: 'left',  
    interval: 500 
  })


