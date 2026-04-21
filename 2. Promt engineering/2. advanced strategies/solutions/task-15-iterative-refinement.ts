/** SOLUTION -- Task 15: Iterative Refinement */
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
  console.log("=== INITIAL ===\n", await getResponse("Give me the top 10 pre-trained language models"));

  const refined = `List the top 10 pre-trained language models as a markdown table with exactly 3 columns: Model Name, Release Year, Owning Company. Sort by release year descending.`;
  console.log("\n=== REFINED ===\n", await getResponse(refined));
}
main();
