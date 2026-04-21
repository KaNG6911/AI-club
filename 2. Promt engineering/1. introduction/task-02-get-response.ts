/**
 * Task 02: getResponse() Helper Function
 * Chapter 1: Introduction to Prompt Engineering Best Practices
 *
 * Курс даяар ашиглах getResponse() функц үүсгэ.
 * Prompt авч, model-д илгээж, хариуг буцаана.
 *
 * Зааварчилгаа:
 * 1. getResponse(prompt: string): Promise<string> функц бич
 *    - model: "gpt-4o-mini"
 *    - messages: [{ role: "user", content: prompt }]
 *    - temperature: 0
 *    - response.choices[0].message.content буцаа
 * 2. "Write a short poem about TypeScript" prompt-оор туршиж үзэ
 *
 * Ажиллуулах: npx tsx "1. Introduction to Prompt Engineering Best Practices/task-02-get-response.ts"
 */

import OpenAI from "openai";

const client = new OpenAI();

// TODO 1: getResponse функц бич
async function getResponse(prompt: string): Promise<string> {
  // const response = await client.chat.completions.create({ ... });
  // return response.choices[0].message.content ?? "";
  return "";
}

async function main() {
  // TODO 2: "Write a short poem about TypeScript" prompt-оор туршиж үзэ
  // const response = await getResponse("...");
  // console.log(response);
}

main();

// Туршилт: prompt-г өөрчилж, temperature 0 vs 1 ялгааг ажиглаарай.
