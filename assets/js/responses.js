async function response() {
    const apiUrl = 'https://ai.samay15jan.xyz/';
  
    const inputBody = document.getElementById('area').value;
    
    // Api call to cloudflare AI worker. Check ai-workers for the workers code.
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: inputBody }) 
    });
  
    const data = await response.json();
    const message = data.response;
    var partition = document.getElementById("area");
    let x = document.getElementById("theme");
    if (x.className === 'dark-theme'){
      partition.className = "bg-slate-800 text-white rounded-xl p-2 lg:ml-20 lg:ml-64 mx-10 w-4/5 lg:w-2/3 textarea drop-shadow-xl h-1/6";
    }
    else {
      partition.className = "bg-white text-black rounded-xl p-2 lg:ml-20 lg:ml-64 mx-10 w-4/5 lg:w-2/3 textarea drop-shadow-xl h-1/6";
    }
    var i = 0;
    var txt = "Elena: " + message;
    var speed = 25;
    function typeWriter() {
      if (i < txt.length) {
        const output = document.getElementById("AI-response");
        let x = document.getElementById("theme");
        if (x.className === 'light-theme'){
          output.className = "animate-3 bg-white text-black rounded-xl p-2 mt-4 lg:ml-20 lg:ml-64 mx-10 w-4/5 lg:w-2/3 textarea drop-shadow-xl h-2/5";    
          output.innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
        else {
          output.className = "animate-3 bg-slate-800 text-white rounded-xl p-2 mt-4 lg:ml-20 lg:ml-64 mx-10 w-4/5 lg:w-2/3 textarea drop-shadow-xl h-2/5";    
          output.innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }}
      } 
    typeWriter()
    
   
    const sr = ScrollReveal({
      distance: '100px', 
      duration: 1000,   
      easing: 'ease',   
      mobile: true      
    });
    sr.reveal('.animate-3', {
      origin: 'bottom',  
      interval: 500    
    })
}



