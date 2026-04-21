/**
 * SOLUTION -- Task 2: Find and Replace (max 100 tokens)
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

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    max_completion_tokens: 100,
  });

  console.log(response.choices[0].message.content);
}

main();
