/** SOLUTION -- Task 03: Prompt Refinement */
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

async function main() {
  const vaguePrompt = "Write a poem about ChatGPT";
  console.log("=== VAGUE ===\n", await getResponse(vaguePrompt));

  const specificPrompt =
    "Write a 4-line rhyming poem about ChatGPT. " +
    "Use simple words that a 10-year-old can understand. " +
    "End with a hopeful message about the future of AI.";
  console.log("\n=== SPECIFIC ===\n", await getResponse(specificPrompt));
}
main();
