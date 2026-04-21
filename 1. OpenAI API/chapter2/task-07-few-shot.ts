/**
 * Task 7: Few-shot Prompting
 * Block 3: Shot Prompting
 *
 * Moderate жишээ нэмэх: "Comfortable, but not very pretty = 2"
 * Few-shot = 2+ жишээ. Classification/structured output-д gold standard.
 *
 * Зааварчилгаа:
 * 1. Task 6-ийн prompt дээр moderate жишээ нэм: "Comfortable, but not very pretty = 2"
 *    -- 2+ жишээтэй болгож, classification space-ийн edge-г хамруул
 * 2. Request илгээ (max_completion_tokens: 100)
 * 3. Хариуг хэвлэ -- Task 5, 6-тай харьцуул
 *
 * Ажиллуулах: npx tsx task-07-few-shot.ts
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  // TODO 1: Few-shot prompt бич (2+ жишээ -- positive, moderate)
  // const prompt = `...`;

  // TODO 2: Request илгээ (max_completion_tokens: 100)
  // const response = await client.chat.completions.create({ ... });

  // TODO 3: Хариуг хэвлэ
  // console.log(...);
}

main();

// Хэлэлцэх:
// - Moderate жишээ нэмснээр "nice but not comfortable" review зөв болсон уу?
// - Classification space-ийн EDGE дээрх жишээ яагаад чухал вэ?
