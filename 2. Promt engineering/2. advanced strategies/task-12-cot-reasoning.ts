/**
 * Task 12: Chain-of-Thought -- Age Reasoning
 * Chapter 2: Advanced Prompt Engineering Strategies
 *
 * CoT prompt ашиглан тооцооллын бодлогыг алхам алхмаар шийдүүл.
 *
 * Зааварчилгаа:
 * 1. CoT prompt бич:
 *    - Найзын нас: 20
 *    - Найзын аав нь найзаас 2 дахин их настай
 *    - 10 жилийн дараа аавын нас хэд болох?
 *    - "Think step by step" нэм
 * 2. CoT байгаа/байхгүй хоёр хариуг харьцуул
 *
 * Ажиллуулах: npx tsx "2. Advanced Prompt Engineering Strategies/task-12-cot-reasoning.ts"
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

const problem = `
My friend is 20 years old.
My friend's father is currently twice my friend's age.
How old will my friend's father be in 10 years?
`;

async function main() {
  // TODO 1: Direct answer (CoT байхгүй)
  const directResponse = await getResponse(problem);
  console.log("=== DIRECT ANSWER ===");
  console.log(directResponse);

  // TODO 2: CoT prompt -- "Think step by step." нэм
  // const cotPrompt = problem + "\n\nThink step by step.";
  // const cotResponse = await getResponse(cotPrompt);
  // console.log("\n=== CHAIN OF THOUGHT ===");
  // console.log(cotResponse);
}

main();
