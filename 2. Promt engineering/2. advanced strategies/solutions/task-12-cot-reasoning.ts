/** SOLUTION -- Task 12: Chain-of-Thought Reasoning */
import OpenAI from "openai";
const client = new OpenAI();

async function getResponse(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
  });
  return response.choices[0].message.content ?? "";
}

const problem = `My friend is 20 years old.\nMy friend's father is currently twice my friend's age.\nHow old will my friend's father be in 10 years?`;

async function main() {
  console.log("=== DIRECT ===\n", await getResponse(problem));
  console.log("\n=== CHAIN OF THOUGHT ===\n", await getResponse(problem + "\n\nThink step by step."));
}
main();
