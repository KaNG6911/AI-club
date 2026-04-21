/**
 * SOLUTION -- Task 1: Building an OpenAI API Request
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Write a polite reply accepting an AI Engineer job offer.",
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();
