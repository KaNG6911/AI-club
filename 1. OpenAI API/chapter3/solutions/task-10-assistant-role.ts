/**
 * SOLUTION -- Task 10: Assistant Role -- In-Context Examples
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful Geography tutor that generates concise summaries for different countries.",
      },
      {
        role: "user",
        content: "Give me a quick summary of Portugal.",
      },
      {
        role: "assistant",
        content:
          "Portugal is a country in Europe that borders Spain. The capital city is Lisboa.",
      },
      {
        role: "user",
        content: "Give me a quick summary of Greece.",
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();
