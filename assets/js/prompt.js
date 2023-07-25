async function prompt(promptFile) {
  const data = await fetch(promptFile);
  const text = await data.text();
  const randomline = Math.floor(Math.random() * 250);
  const lines = text.split('\n'); 
  const finalPrompt = lines[randomline];
  document.getElementById("title").innerHTML = finalPrompt;
}
