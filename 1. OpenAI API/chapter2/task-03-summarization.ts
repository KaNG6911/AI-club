/**
 * Task 3: Text Summarization (template literal + max 400 tokens)
 * Block 2: Text Operations & Parameters
 *
 * Санхүүгийн текстийг 2 bullet point болгон товчил.
 * Template literal ашиглаж variable-г prompt-д оруулах /бодит app-д байнга хэрэглэнэ/.
 *
 * Зааварчилгаа:
 * 1. Template literal (`${variable}`) ашиглаж financeText-г prompt-д оруул
 *    - Жишээ: `Summarize the following text into two concise bullet points:\n${financeText}`
 * 2. Chat Completions request илгээ (max_completion_tokens: 400)
 * 3. Хариуг хэвлэ
 *
 * Ажиллуулах: npx tsx task-03-summarization.ts
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const financeText = `The stock market experienced a significant downturn last quarter,
  with major indices dropping by an average of 15%. Analysts attribute this decline to rising interest rates,
  geopolitical tensions, and slowing consumer spending. Despite the downturn, some sectors like energy
  and healthcare showed resilience. Investors are now cautiously optimistic about the upcoming quarter,
  with expectations of stabilizing inflation and potential rate cuts. Financial advisors recommend diversifying
  portfolios and maintaining a long-term investment strategy during periods of market volatility.`;

  // TODO 1: Template literal ашиглаж prompt бүтээ (financeText-г оруул)
  // const prompt = `...`;

  // TODO 2: Request илгээ (max_completion_tokens: 400)
  // const response = await client.chat.completions.create({ ... });

  // TODO 3: Хариуг хэвлэ
  // console.log(...);
}

main();

// Анхаарах: Template literal (`${variable}`) ашиглаж variable-г prompt-д оруулах
// -- бодит app-д database-аас авсан data-г prompt-д оруулахад хэрэглэнэ.
