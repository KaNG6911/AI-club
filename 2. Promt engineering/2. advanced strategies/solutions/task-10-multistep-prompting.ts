/** SOLUTION -- Task 10: Multi-Step Prompting */
import OpenAI from "openai";
const client = new OpenAI();

async function getResponse(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
    max_tokens: 500,
  });
  return response.choices[0].message.content ?? "";
}

async function main() {
  console.log("=== SINGLE-STEP ===\n", await getResponse("Help me plan a beach vacation"));

  const multiStepPrompt = `Help me plan a beach vacation following these steps:

Step 1: Suggest 4 potential beach destinations.
Step 2: For each destination, provide:
   - 2 accommodation options (budget and premium)
   - 3 activities
   - 2 pros and 2 cons
Step 3: Give a final recommendation based on best value for money.`;

  console.log("\n=== MULTI-STEP ===\n", await getResponse(multiStepPrompt));
}
main();
