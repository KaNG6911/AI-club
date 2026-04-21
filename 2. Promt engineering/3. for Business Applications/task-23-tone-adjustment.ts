/**
 * Task 23: Tone Adjustment & Writing Improvement
 * Chapter 3: Prompt Engineering for Business Applications
 *
 * 2 transformation хийнэ:
 *   A) Email-ийн tone-г professional, positive, user-centric болгох
 *   B) Multi-step: proofread + formal/friendly tone болгох
 *
 * Зааварчилгаа:
 * 1. adjustEmailTone(): sampleEmail-г professional болгох prompt
 * 2. improveWriting(): multi-step -- эхлээд proofread, дараа нь tone засах
 *
 * Ажиллуулах: npx tsx "3. Prompt Engineering for Business Applications/task-23-tone-adjustment.ts"
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

const sampleEmail =
  "hey! just wanted to let u know we got some sick new products lol. " +
  "check em out or whatever, they're pretty cool i guess. " +
  "u can get 20% off if u order before friday. hit us up if u want more info bye";

const userReview =
  "i think this phone is relly good but the bateery life could be better. " +
  "its like super fast and the camra is amazin. " +
  "definately reccomend to anyone who wants a good phone for the price.";

async function adjustEmailTone(): Promise<void> {
  // TODO: sampleEmail-г professional, positive, user-centric болгох prompt
  // Template literal ашиглаж email оруул

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log("=== EMAIL TONE ADJUSTMENT ===");
  // console.log("Before:\n", sampleEmail);
  // console.log("After:\n", response);
}

async function improveWriting(): Promise<void> {
  // TODO: Multi-step prompt:
  // Step 1: Proofread userReview (spelling/grammar, structure хадгал)
  // Step 2: Tone-г formal болон friendly болгох

  // const prompt = `...`;
  // const response = await getResponse(prompt);
  // console.log("\n=== WRITING IMPROVEMENT ===");
  // console.log("Before:\n", userReview);
  // console.log("After:\n", response);
}

async function main() {
  await adjustEmailTone();
  await improveWriting();
}

main();
