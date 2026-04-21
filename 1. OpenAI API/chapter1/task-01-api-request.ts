/**
 * Task 1: Building an OpenAI API Request
 * Block 1: Warm-Up
 *
 * OpenAI client үүсгэж, Chat Completions endpoint руу request илгээ.
 *
 * Зааварчилгаа:
 * 1. OpenAI client үүсгэ
 * 2. Chat Completions endpoint руу request илгээ
 *    - model: "gpt-4o-mini"
 *    - user message: "Write a polite reply accepting an AI Engineer job offer."
 * 3. Хариуг хэвлэ (response.choices[0].message.content)
 *
 * Ажиллуулах: npx tsx task-01-api-request.ts
 */

import OpenAI from "openai";

async function main() {
  const client = new OpenAI();
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Write a polite reply accepting an AI Engineer job offer.",
      },
    ],
  });
  console.log(response.choices[0].message.content);

  // TODO 2: Chat Completions endpoint руу request илгээ
  // const response = await client.chat.completions.create({ ... });
  // TODO 3: Хариуг хэвлэ
  // console.log(...);
}

main();

// Туршилт: Prompt-оо өөрчилж, өөр өөр асуулт илгээж үзээрэй.
