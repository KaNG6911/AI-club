/**
 * SOLUTION -- Task 5: Zero-shot Sentiment Analysis
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const prompt = `Classify the sentiment of the statements provided using the numbers 1 to 5 (positive to negative):
1. Unbelievably good!
2. Shoes fell apart on the second use.
3. The shoes look nice, but they aren't very comfortable.
4. Can't wait to show them off!`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    max_completion_tokens: 100,
  });

  console.log(response.choices[0].message.content);
}

main();
