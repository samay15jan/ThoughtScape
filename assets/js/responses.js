async function response() {
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
  
    const input = document.getElementById('area').value;
  
    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: input }],
      temperature: 0.5,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
    };
  
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });
  
    const data = await response.json();
    const message = data.choices[0].message.content;
    const output = document.getElementById("center");
    output.innerHTML = "AI:  " +  message;
}
  