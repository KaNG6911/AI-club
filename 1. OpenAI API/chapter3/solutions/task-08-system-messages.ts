/**
 * SOLUTION -- Task 8: System Messages
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    max_completion_tokens: 150,
    messages: [
      {
        role: "system",
        content:
          "You are a study planning assistant that creates plans for learning new skills.",
      },
      {
        role: "user",
        content: "I want to learn to speak Dutch.",
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();
