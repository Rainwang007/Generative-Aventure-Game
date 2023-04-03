async function fetchGeneratedText(prompt) {
  const url = "/api/completions";
  const headers = {
    "Content-Type": "application/json",
  };
  const body = {
    prompt,
    max_tokens: 50,
    n: 1,
    stop: null,
    temperature: 0.8,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const result = await response.json();
      const generatedText = result.choices[0].text.trim();
      return { success: true, text: generatedText };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("Error fetching generated text:", error);
    return { success: false };
  }
}



document.addEventListener("DOMContentLoaded", () => {
    const generateTextButton = document.getElementById("generate-text");
    const generatedTextDiv = document.getElementById("generated-text");
  
    generateTextButton.addEventListener("click", async () => {
      const prompt = "请为我生成一段关于未来的描述。";
      const response = await fetchGeneratedText(prompt);
  
      if (response.success) {
        generatedTextDiv.innerText = response.text;
      } else {
        generatedTextDiv.innerText = "生成文本时出错。";
      }
    });
  });
  
  async function fetchGeneratedText(prompt) {

    const url = "https://api.openai.com/v1/engines/davinci-codex/completions";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    };
    const body = {
      prompt,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.8,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
  
      if (response.ok) {
        const result = await response.json();
        const generatedText = result.choices[0].text.trim();
        return { success: true, text: generatedText };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error("Error fetching generated text:", error);
      return { success: false };
    }
  }
  