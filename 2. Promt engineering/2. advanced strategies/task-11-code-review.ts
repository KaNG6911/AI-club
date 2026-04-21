/**
 * Task 11: Multi-Step -- Code Review
 * Chapter 2: Advanced Prompt Engineering Strategies
 *
 * Multi-step prompt ашиглан TypeScript функцийг шинжил.
 * Алхам бүрт тодорхой шалгуур ашигла.
 *
 * Зааварчилгаа:
 * 1. Multi-step prompt бич:
 *    Step 1: Syntax зөв эсэхийг шалга
 *    Step 2: Яг 2 input авч байна уу?
 *    Step 3: 1 output буцааж байна уу?
 *    Step 4: Дүгнэлт өг (Pass/Fail + шалтгаан)
 * 2. functions array дахь бүх функцийг шинжил
 *
 * Ажиллуулах: npx tsx "2. Advanced Prompt Engineering Strategies/task-11-code-review.ts"
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

const functions = [
  `function calculateArea(length: number, width: number): number {
  return length * width;
}`,
  `function greet(name) {
  console.log("Hello " + name)
  // missing return
}`,
  `function add(a: number, b: number, c: number): number {
  return a + b + c;
}`,
];

async function reviewFunction(code: string): Promise<void> {
  // TODO: Multi-step prompt бич
  // Step 1: Syntax check
  // Step 2: 2 input шалга
  // Step 3: 1 output шалга
  // Step 4: Summary (Pass/Fail)
  // code-г triple backtick-оор delimiter хий

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log(response);
  // console.log("---");
}

async function main() {
  for (const fn of functions) {
    console.log(`Reviewing:\n${fn}\n`);
    await reviewFunction(fn);
  }
}

main();
