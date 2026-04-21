/** SOLUTION -- Task 22: Multilingual Translation */
import OpenAI from "openai";
const client = new OpenAI();

async function getResponse(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({ model: "gpt-4o-mini", messages: [{ role: "user", content: prompt }], temperature: 0 });
  return response.choices[0].message.content ?? "";
}

const marketingMessage = "Introducing our latest collection of premium leather handbags — crafted for the modern professional who demands elegance, durability, and style without compromise. Elevate your everyday look today.";

async function main() {
  const prompt = `Translate the following marketing message to French, Spanish, and Japanese.\nPreserve the marketing tone and excitement in each translation.\nLabel each translation clearly.\n\nMessage:\n${marketingMessage}`;
  console.log("English:\n", marketingMessage, "\n\nTranslations:\n", await getResponse(prompt));
}
main();
