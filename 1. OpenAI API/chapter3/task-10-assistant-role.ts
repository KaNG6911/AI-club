/**
 * Task 10: Assistant Role -- In-Context Examples
 * Block 4: Roles, Guardrails & Multi-Turn
 *
 * Geography tutor-д user-assistant жишээ pair нэмж, хариуны format-г удирд.
 * Assistant message = "fake conversation history" -- model-д сайн хариу гэж юу болохыг үзүүлдэг.
 *
 * Зааварчилгаа:
 * 1. messages массив бэлдэ:
 *    - system: "You are a helpful Geography tutor that generates concise summaries for different countries."
 *    - user: "Give me a quick summary of Portugal."
 *    - assistant: "Portugal is a country in Europe that borders Spain. The capital city is Lisboa."
 *    - user: "Give me a quick summary of Greece."
 * 2. Request илгээ
 * 3. Хариуг хэвлэ -- Greece-ийн хариу Portugal жишээний форматтай ижил эсэхийг шалга
 *
 * Ажиллуулах: npx tsx task-10-assistant-role.ts
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  // TODO 1: messages массив бэлдэ (system, user-Portugal, assistant-Portugal жишээ, user-Greece)
  // TODO 2: Request илгээ
  // const response = await client.chat.completions.create({ ... });

  // TODO 3: Хариуг хэвлэ
  // console.log(...);
}

main();

// Ажиглах: Greece-ийн хариу Portugal жишээний FORMAT-тай ижил болж байна уу?
// (товч, 2 өгүүлбэр, нийслэл хот дурьдсан)
