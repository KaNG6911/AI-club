/**
 * Task 08: One-Shot Prompting -- Output Format Control
 * Chapter 2: Advanced Prompt Engineering Strategies
 *
 * One-shot жишээ ашиглан output format-г хянах.
 * Тоонуудын олонлогоос сондгой тоог гаргуул -- жишээний format-г дагуулна.
 *
 * Зааварчилгаа:
 * 1. One-shot prompt бич:
 *    - Жишээ: {1, 3, 7, 12, 19} -> {1, 3, 7, 19}
 *    - Асуулт: {3, 5, 11, 12, 16}
 * 2. Хариуг хэвлэ
 *
 * Ажиллуулах: npx tsx "2. Advanced Prompt Engineering Strategies/task-08-one-shot-output.ts"
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

async function main() {
  // TODO: One-shot prompt бич
  // Жишээний format-г харуул: {1, 3, 7, 12, 19} -> {1, 3, 7, 19}
  // Дараа нь шинэ олонлог {3, 5, 11, 12, 16}-ийн хариуг асуу

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log(response);
}

main();

// Туршилт: Жишээ байгаа/байхгүй үед format хэрхэн өөрчлөгдөж байна?
