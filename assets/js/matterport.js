// Matterport
const iframeSrcFile = "/resources/matterport.txt";
async function explore(iframeSrcFile){
    const file = await fetch(iframeSrcFile);
    const text = await file.text();
    const randomline = Math.floor(Math.random() * 25);
    const lines = text.split('\n'); 
    const finalSrc = lines[randomline];
    console.log("thisssss" + finalSrc);
    var iframe = document.createElement('iframe');
    iframe.src = finalSrc;
    iframe.className = 'w-screen h-screen'
    iframe.frameborder = '0';
    iframe.allowfullscreen = 'true';
    var outputLocation = document.getElementById('body');
    outputLocation.className = ('container flex w-screen h-screen overflow-hidden');
    outputLocation.appendChild(iframe);
}

explore()
