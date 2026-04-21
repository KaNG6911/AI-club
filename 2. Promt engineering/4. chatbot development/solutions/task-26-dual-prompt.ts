/** SOLUTION -- Task 26: Dual-Prompt getResponse */
import OpenAI from "openai";
const client = new OpenAI();

async function getResponse(systemPrompt: string, userPrompt: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    temperature: 0,
  });
  return response.choices[0].message.content ?? "";
}

async function main() {
  const response = await getResponse(
    "You are a senior software engineer. Answer only coding questions concisely.",
    "What is the best programming language for backend development?"
  );
  console.log(response);
}
main();
