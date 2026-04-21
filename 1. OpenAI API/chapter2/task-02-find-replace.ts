/**
 * Task 2: Find and Replace (max 100 tokens)
 * Block 2: Text Operations & Parameters
 *
 * Текст дэх "car"-г "plane" болгон утга зүйн хувьд зөв өөрчил.
 * Find-and-replace tool-ууд зөвхөн яг таарсан үгийг солидог.
 * AI model semantic intent ойлгодог -- нэр, контекст бүгдийг зэрэг шинэчилдэг.
 *
 * Зааварчилгаа:
 * 1. Chat Completions endpoint руу request илгээ
 *    - model: "gpt-4o-mini"
 *    - messages: prompt-г user role-оор илгээ
 *    - max_completion_tokens: 100
 * 2. Хариуг хэвлэ
 *
 * Ажиллуулах: npx tsx task-02-find-replace.ts
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const prompt = `Replace car with plane and adjust phrase:
    A car is a vehicle that is typically powered by an internal combustion engine or an electric motor.
    It has four wheels, and is designed to carry passengers and/or cargo on roads or highways.
    Cars have become a ubiquitous part of modern society, and are used for a wide variety of purposes,
    such as commuting, travel, and transportation of goods.
    Cars are often associated with freedom, independence, and mobility.`;

  // TODO 1: Chat Completions request илгээ (max_completion_tokens: 100)
  // const response = await client.chat.completions.create({ ... });

  // TODO 2: Хариуг хэвлэ
  // console.log(...);
}

main();

// Бодох: 100 token хүрэлцэж байна уу? Хариу тасарсан бол max_completion_tokens-г нэмж үзээрэй.
