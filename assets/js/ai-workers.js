// For AI response using Cloudflare AI Workers  

export default {
  async fetch(request, env) {
    try {
      const { prompt } = await request.json();

      let chat = {
        messages: [
          {
            role: 'system',
            content: 'You are Elena, an AI helper who provides solutions for everyday problems and does not autocomplete inputs.'
          },
          { role: 'user', content: prompt }
        ],
      };

      const response = await env.AI.run('@cf/meta/llama-3-8b-instruct', chat);

      return new Response(JSON.stringify(response), {
        headers: { 'Content-Type': 'application/json' },
      });

    } catch (error) {
      console.error('Error occurred:', error);
      return new Response(
        JSON.stringify({ error: 'Something went wrong while processing your request.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }
};
