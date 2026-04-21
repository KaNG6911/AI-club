/**
 * Task 10: Multi-Step Prompting -- Vacation Planning
 * Chapter 2: Advanced Prompt Engineering Strategies
 *
 * Single-step vs multi-step prompt-г харьцуул.
 * Multi-step prompt хэрхэн илүү бүтэцтэй, хэрэгтэй хариу өгдгийг ажиглаарай.
 *
 * Зааварчилгаа:
 * 1. singleStep(): "Help me plan a beach vacation" -- энгийн prompt
 * 2. multiStep(): Дараах алхмуудтай prompt:
 *    - 4 боломжит байршил санаачлах
 *    - Байршил бүрт: accommodation, activities, pros & cons
 *    - Эцсийн recommendation
 * 3. Хоёр хариуг харьцуул
 *
 * Ажиллуулах: npx tsx "2. Advanced Prompt Engineering Strategies/task-10-multistep-prompting.ts"
 */

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

async function singleStep() {
  // TODO: Энгийн нэг мөрт prompt
  const prompt = "Help me plan a beach vacation";
  const response = await getResponse(prompt);
  console.log("=== SINGLE-STEP ===\n", response);
}

async function multiStep() {
  // TODO: Алхам бүрийг тодорхойлсон prompt бич
  // Step 1: 4 байршил санаачил
  // Step 2: Байршил бүрд accommodation, activities, pros/cons жагсаа
  // Step 3: Эцсийн recommendation өг

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log("\n=== MULTI-STEP ===\n", response);
}

async function main() {
  await singleStep();
  await multiStep();
}

main();
