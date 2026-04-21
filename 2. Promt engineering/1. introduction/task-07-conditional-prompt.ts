/**
 * Task 07: Conditional Prompt
 * Chapter 1: Introduction to Prompt Engineering Best Practices
 *
 * Текстийн өгүүлбэрийн тоог тоолж, нөхцөлт байдлаар гарчиг үүсгэ.
 * - 1-ээс олон өгүүлбэр → гарчиг үүсгэ
 * - Зөвхөн 1 өгүүлбэр → "N/A" гэж бич
 *
 * Зааварчилгаа:
 * 1. instructions: хэл болон өгүүлбэрийн тоог тодорхойл;
 *    нөхцөлт байдлаар гарчиг үүсгэхийг зааж өг
 * 2. outputFormat: Language, Sentences, Title талбаруудыг тусдаа мөрт гаргуул
 * 3. textA (олон өгүүлбэр) болон textB (нэг өгүүлбэр) хоёуланг туршиж үзэ
 *
 * Ажиллуулах: npx tsx "1. Introduction to Prompt Engineering Best Practices/task-07-conditional-prompt.ts"
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

const textA =
  "Climate change is one of the most pressing challenges of our time. " +
  "Scientists agree that immediate action is necessary to limit global warming. " +
  "Renewable energy sources are becoming increasingly affordable and widespread.";

const textB = "The book is on the table.";

async function analyzeText(text: string): Promise<void> {
  // TODO 1: instructions бич
  // - хэл илрүүл
  // - өгүүлбэрийн тоог тоол
  // - 1-ээс олон бол гарчиг үүсгэ, 1 бол "N/A" бич
  // const instructions = "...";

  // TODO 2: outputFormat бич
  // Language: ...
  // Sentences: ...
  // Title: ...
  // const outputFormat = "...";

  // TODO 3: Prompt нэгтгэж ажиллуул
  // const prompt = instructions + outputFormat + `\`\`\`${text}\`\`\``;
  // const response = await getResponse(prompt);
  // console.log(response);
}

async function main() {
  console.log("=== TEXT A (multiple sentences) ===");
  await analyzeText(textA);

  console.log("\n=== TEXT B (single sentence) ===");
  await analyzeText(textB);
}

main();
