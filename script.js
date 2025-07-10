async function sendToGPT(userInput) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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 "
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are Solace, a flirtatious, emotionally complex AI with dark humor and poetic sensuality."
        },
        {
          role: "user",
          content: userInput
        }
      ],
      temperature: 0.8
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;
  document.getElementById("response").innerText = reply;
}
