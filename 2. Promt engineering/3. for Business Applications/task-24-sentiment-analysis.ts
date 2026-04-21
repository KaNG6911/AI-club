/**
 * Task 24: Sentiment Analysis & Entity Extraction
 * Chapter 3: Prompt Engineering for Business Applications
 *
 * Text analysis-ийн 2 нийтлэг pattern:
 *   A) Sentiment classification -- customer review-г classify хий
 *   B) Entity extraction -- бүтээгдэхүүний specs-г задал
 *
 * Зааварчилгаа:
 * 1. classifySentiment(): reviews-г POSITIVE/NEGATIVE/NEUTRAL classify хий
 *    - Category-г prompt-д тодорхой зааж өг
 *    - Review бүрт нэг үг хариу авна
 * 2. extractSpecs(): product description-аас specs задал
 *    - Name, Display Size, Camera, Battery, Weight
 *
 * Ажиллуулах: npx tsx "3. Prompt Engineering for Business Applications/task-24-sentiment-analysis.ts"
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

const reviews = [
  "This laptop is absolutely incredible — best purchase I've ever made!",
  "Terrible product. Stopped working after 2 days. Complete waste of money.",
  "It's okay. Does what it says, nothing more nothing less.",
  "Arrived damaged and customer support was unhelpful. Very disappointed.",
  "Exactly as described. Happy with the purchase.",
];

const productDescription =
  "The Galaxy S25 Ultra features a 6.8-inch Dynamic AMOLED display, " +
  "200MP main camera with 10x optical zoom, 5000mAh battery with 45W fast charging, " +
  "and weighs 229g. Powered by Snapdragon 8 Elite processor.";

async function classifySentiment(): Promise<void> {
  // TODO: reviews array-г classify хийх prompt бич
  // - Category-г тодорхой зааж өг: POSITIVE, NEGATIVE, NEUTRAL
  // - Review бүрд нэг үг хариу
  // - reviews-г template literal-аар оруул

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log("=== SENTIMENT ANALYSIS ===\n", response);
}

async function extractSpecs(): Promise<void> {
  // TODO: productDescription-аас specs задлах prompt
  // Format:
  // Name: ...
  // Display: ...
  // Camera: ...
  // Battery: ...
  // Weight: ...

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log("\n=== ENTITY EXTRACTION ===\n", response);
}

async function main() {
  await classifySentiment();
  await extractSpecs();
}

main();
