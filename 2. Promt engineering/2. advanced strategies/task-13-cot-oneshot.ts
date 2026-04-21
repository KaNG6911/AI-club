/**
 * Task 13: One-Shot Chain-of-Thought
 * Chapter 2: Advanced Prompt Engineering Strategies
 *
 * Жишээгээр reasoning pattern заан, model-г дагуулах.
 * Сондгой тоонуудын нийлбэрийг CoT ашиглан бодуул.
 *
 * Зааварчилгаа:
 * 1. example: {9, 10, 13, 4, 2}-ийн сондгой тоонуудын нийлбэр (CoT хамт)
 * 2. question: {15, 13, 82, 7, 14}-ийг ижил аргаар бодуул
 * 3. example + question нэгтгэж prompt үүсгэ
 *
 * Ажиллуулах: npx tsx "2. Advanced Prompt Engineering Strategies/task-13-cot-oneshot.ts"
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
  // TODO 1: example -- CoT reasoning pattern харуул
  // Q: Sum the odd numbers in {9, 10, 13, 4, 2}
  // A: Odd numbers: {9, 13}. Sum: 9 + 13 = 22
  // const example = `...`;

  // TODO 2: question -- шинэ олонлог асуу
  // Q: Sum the odd numbers in {15, 13, 82, 7, 14}
  // A:
  // const question = `...`;

  // TODO 3: Нэгтгэж ажиллуул
  // const prompt = example + question;
  // const response = await getResponse(prompt);
  // console.log(response);
}

main();
