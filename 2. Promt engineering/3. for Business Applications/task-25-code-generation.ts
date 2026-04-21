/**
 * Task 25: Code Generation & Explanation
 * Chapter 3: Prompt Engineering for Business Applications
 *
 * 3 code generation pattern:
 *   A) Problem description → функц бичүүлэх
 *   B) Input-output жишээнүүд → функц таалгах
 *   C) CoT → код тайлбарлуулах
 *
 * Зааварчилгаа:
 * Функц бүрийн prompt-г бич -- TypeScript функц авна
 *
 * Ажиллуулах: npx tsx "3. Prompt Engineering for Business Applications/task-25-code-generation.ts"
 */

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

const examples = `
input: [10, 5, 8] -> output: 23
input: [5, 2, 4]  -> output: 11
input: [2, 1, 3]  -> output: 6
input: [8, 4, 6]  -> output: 18
`;

const unknownFunction = `
function mystery(data: number[]): { avg: number; above: number[] } {
  const avg = data.reduce((sum, n) => sum + n, 0) / data.length;
  const above = data.filter(n => n > avg);
  return { avg: parseFloat(avg.toFixed(2)), above };
}
`;

async function generateFromDescription(): Promise<void> {
  // TODO: Prompt bich
  // TypeScript функц бичүүлэх -- 12 сарын борлуулалтын тоо авч,
  // хамгийн их борлуулалттай сарын дугаар (1-12) буцаана.
  // Proper TypeScript types оруул.

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log("=== FROM DESCRIPTION ===\n", response);
}

async function generateFromExamples(): Promise<void> {
  // TODO: examples-г template literal-аар оруулж
  // model-г TypeScript функц taалгуулах prompt бич

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log("\n=== FROM EXAMPLES ===\n", response);
}

async function explainCode(): Promise<void> {
  // TODO: unknownFunction-г CoT-оор тайлбарлуулах prompt
  // Step 1: Input/output тодорхойл
  // Step 2: Logic-г мөр бүрээр тайлбарла
  // Step 3: Нэг өгүүлбэрийн summary

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log("\n=== CODE EXPLANATION ===\n", response);
}

async function main() {
  await generateFromDescription();
  await generateFromExamples();
  await explainCode();
}

main();
