/**
 * Task 4: Product Description + Temperature Experiment
 * Block 2: Text Operations & Parameters
 *
 * SonicPro headphones-ийн description бич.
 * Temperature болон max_completion_tokens-г өөрчилж туршилт хий!
 *
 * Зааварчилгаа:
 * 1. temperature variable зарлаж эхлээд 1 утгатай байлга
 * 2. Request илгээ (max_completion_tokens: 50, temperature: temperature)
 * 3. Temperature болон хариуг хэвлэ
 * 4. temperature-г 0, 1, 2 болгож гурван удаа ажиллуулж харьцуул!
 *
 * Ажиллуулах: npx tsx task-04-temperature.ts
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const prompt = `
Write a detailed product description for SonicPro wireless headphones.
Features include:
- Active Noise Cancellation (ANC)
- 40-hour battery life
- Foldable design for portability

Explain the benefits of these features and why the headphones are useful for travelers, commuters, and music lovers.
Use a clear and engaging tone.
`;

  // TODO 1: temperature variable зарла (0, 1, эсвэл 2)
  // const temperature = ...;

  // TODO 2: Request илгээ (max_completion_tokens: 50, temperature: temperature)
  // const response = await client.chat.completions.create({ ... });

  // TODO 3: Temperature болон хариуг хэвлэ
  // console.log(`Temperature: ${temperature}`);
  // console.log(...);
}

main();

// Заавал хийх туршилт:
// 1. temperature=0 -- Ажиллуулж output-г хадгал
// 2. temperature=1 -- Ажиллуулж харьцуул
// 3. temperature=2 -- Ажиллуулж юу өөрчлөгдсөнийг ажигл
// 4. max_completion_tokens=150 болгож дахин ажиллуул
//
// Асуулт: Аль temperature маркетингийн текстэд тохирох вэ?
