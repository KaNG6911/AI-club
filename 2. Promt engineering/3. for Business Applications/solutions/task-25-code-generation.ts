/** SOLUTION -- Task 25: Code Generation */
import OpenAI from "openai";
const client = new OpenAI();

async function getResponse(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({ model: "gpt-4o-mini", messages: [{ role: "user", content: prompt }], temperature: 0 });
  return response.choices[0].message.content ?? "";
}

const examples = `input: [10, 5, 8] -> output: 23\ninput: [5, 2, 4]  -> output: 11\ninput: [2, 1, 3]  -> output: 6\ninput: [8, 4, 6]  -> output: 18`;
const unknownFunction = `function mystery(data: number[]): { avg: number; above: number[] } {\n  const avg = data.reduce((sum, n) => sum + n, 0) / data.length;\n  const above = data.filter(n => n > avg);\n  return { avg: parseFloat(avg.toFixed(2)), above };\n}`;

async function main() {
  console.log("=== FROM DESCRIPTION ===\n", await getResponse("Write a TypeScript function that receives an array of 12 numbers (monthly sales) and returns the month number (1-12) with the highest sales. Handle ties by returning the first occurrence. Include proper TypeScript types."));
  console.log("\n=== FROM EXAMPLES ===\n", await getResponse(`Infer the TypeScript function that maps these inputs to outputs:\n${examples}`));
  console.log("\n=== CODE EXPLANATION ===\n", await getResponse(`Explain this TypeScript function step by step.\nStep 1: Identify inputs and outputs.\nStep 2: Explain each line.\nStep 3: Summarize the purpose in one sentence.\n\nFunction:\n\`\`\`typescript\n${unknownFunction}\n\`\`\``));
}
main();
