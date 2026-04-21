/**
 * Task 26: Dual-Prompt getResponse() Function
 * Chapter 4: Prompt Engineering for Chatbot Development
 *
 * System prompt + user prompt хоёуланг авдаг getResponse функц үүсгэ.
 * Chapter 4-т бүх task энэ функцийг ашиглана.
 *
 * Зааварчилгаа:
 * 1. getResponse(systemPrompt, userPrompt) функц бич
 *    - messages: [system, user] хоёуланг оруул
 *    - temperature: 0
 * 2. Дур сонгосон system + user prompt-оор туршиж үзэ
 *    - Жишээ system: "You are a senior software engineer. Answer only coding questions."
 *    - Жишээ user: "What is the best programming language for backend?"
 *
 * Ажиллуулах: npx tsx "4. Prompt Engineering for Chatbot Development/task-26-dual-prompt.ts"
 */

import OpenAI from "openai";

const client = new OpenAI();

// TODO 1: Dual-prompt getResponse функц бич
async function getResponse(systemPrompt: string, userPrompt: string): Promise<string> {
  // const response = await client.chat.completions.create({
  //   model: "gpt-4o-mini",
  //   messages: [
  //     { role: "system", content: systemPrompt },
  //     { role: "user", content: userPrompt },
  //   ],
  //   temperature: 0,
  // });
  // return response.choices[0].message.content ?? "";
  return "";
}

async function main() {
  // TODO 2: Дур сонгосон system + user prompt-оор туршиж үзэ
  // const response = await getResponse("...", "...");
  // console.log(response);
}

main();
