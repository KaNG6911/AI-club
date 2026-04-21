/**
 * Task 6: One-shot Prompting
 * Block 3: Shot Prompting
 *
 * "Love these! = 5" жишээ нэмж, format-г "=" тэмдэгтээр тодорхойл.
 * One-shot = 1 жишээ өгөх. Formatting dramatically сайжирдаг.
 *
 * Зааварчилгаа:
 * 1. Prompt-ийн эхэнд 1 жишээ нэм: "Love these! = 5"
 * 2. Бусад review бүрийн ард "=" тэмдэгт нэм (хариуг тэнд бичүүлнэ)
 *    Жишээ:
 *      Love these! = 5
 *      Unbelievably good! =
 *      Shoes fell apart on the second use. =
 *      ...
 * 3. Request илгээ (max_completion_tokens: 100)
 * 4. Хариуг хэвлэ -- Task 5-ийн хариутай харьцуул
 *
 * Ажиллуулах: npx tsx task-06-one-shot.ts
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  // TODO 1: One-shot prompt бич (1 жишээ + хариу нь "=" дараа орох review-ууд)
  // const prompt = `...`;

  // TODO 2: Request илгээ (max_completion_tokens: 100)
  // const response = await client.chat.completions.create({ ... });

  // TODO 3: Хариуг хэвлэ
  // console.log(...);
}

main();

// Харьцуулах: Task 5-ийн хариутай яаж ялгаатай вэ? Format сайжирсан уу?
