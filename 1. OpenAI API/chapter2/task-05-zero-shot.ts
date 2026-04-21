/**
 * Task 5: Zero-shot Sentiment Analysis
 * Block 3: Shot Prompting (3 task-г ДАРААЛАЛТАЙ хий!)
 *
 * Жишээ өгөхгүйгээр review-г 1-5 classify хий.
 * Zero-shot = зөвхөн instruction, ямар ч жишээ байхгүй.
 *
 * Зааварчилгаа:
 * 1. Sentiment classify хийх prompt бич:
 *    - Instruction: "Classify the sentiment ... using the numbers 1 to 5 (positive to negative)"
 *    - Дараах 4 review-г жагсаа:
 *      1. Unbelievably good!
 *      2. Shoes fell apart on the second use.
 *      3. The shoes look nice, but they aren't very comfortable.
 *      4. Can't wait to show them off!
 * 2. gpt-4o-mini руу request илгээ (max_completion_tokens: 100)
 * 3. Хариуг хэвлэ
 *
 * Ажиллуулах: npx tsx task-05-zero-shot.ts
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  // TODO 1: Zero-shot prompt бич (зөвхөн instruction + review-ууд, жишээ БАЙХГҮЙ)
  // const prompt = `...`;

  // TODO 2: Request илгээ (max_completion_tokens: 100)
  // const response = await client.chat.completions.create({ ... });

  // TODO 3: Хариуг хэвлэ
  // console.log(...);
}

main();

// Ажиглах: Output-ийн format consistent байна уу?
// Хэдэн удаа ажиллуулбал хариу өөрчлөгдөх үү?
