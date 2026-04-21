/**
 * SOLUTION -- Task 4: Product Description + Temperature Experiment
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const prompt = `
Write a detailed product description for SonicPro wireless headphones.
Features include:
- Active Noise Cancellation (ANC)
- 40-hour battery life
- Foldable design for portability

Explain the benefits of these features and why the headphones are useful for travelers, commuters, and music lovers.
Use a clear and engaging tone.
`;

  const temperature = 1;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    max_completion_tokens: 50,
    temperature,
  });

  console.log(`Temperature: ${temperature}`);
  console.log(response.choices[0].message.content);
}

main();
