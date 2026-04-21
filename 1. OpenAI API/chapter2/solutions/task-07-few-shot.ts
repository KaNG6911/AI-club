/**
 * SOLUTION -- Task 7: Few-shot Prompting
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const prompt = `Classify sentiment as 1-5 (negative to positive):
Comfortable, but not very pretty = 2
Love these! = 5
Unbelievably good! =
Shoes fell apart on the second use. =
The shoes look nice, but they aren't very comfortable. =
Can't wait to show them off! = `;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    max_completion_tokens: 100,
  });

  console.log(response.choices[0].message.content);
}

main();
