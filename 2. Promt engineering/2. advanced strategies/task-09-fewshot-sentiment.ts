/**
 * Task 09: Few-Shot Sentiment Analysis
 * Chapter 2: Advanced Prompt Engineering Strategies
 *
 * Chat roles ашиглан few-shot sentiment classifier бүтээ.
 * User-Assistant pair-г жишээ болгон ашигла.
 *
 * Зааварчилгаа:
 * 1. System: "You are a customer review classifier."
 * 2. Few-shot жишээ (user/assistant pair-ууд):
 *    - "The product quality exceeded my expectations" → "1"
 *    - "I had a terrible experience with customer service" → "-1"
 * 3. Classify хийх: "The price is really fair given its features."
 * 4. temperature: 0
 *
 * Ажиллуулах: npx tsx "2. Advanced Prompt Engineering Strategies/task-09-fewshot-sentiment.ts"
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      // TODO 1: System message нэм
      // { role: "system", content: "..." },

      // TODO 2: Few-shot жишээ 1 (positive)
      // { role: "user", content: "..." },
      // { role: "assistant", content: "..." },

      // TODO 3: Few-shot жишээ 2 (negative)
      // { role: "user", content: "..." },
      // { role: "assistant", content: "..." },

      // TODO 4: Classify хийх мессеж
      // { role: "user", content: "..." },
    ],
    temperature: 0,
  });

  console.log(response.choices[0].message.content);
}

main();

// Туршилт: Neutral review нэмж үзэ -- model 0 буцааж чадах уу?
// 3 дахь жишээ нэм: "It's okay, nothing special." → "0"
