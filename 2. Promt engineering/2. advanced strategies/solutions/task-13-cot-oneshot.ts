/** SOLUTION -- Task 13: One-Shot CoT */
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

async function main() {
  const example = `Q: Sum the odd numbers in the following set: {9, 10, 13, 4, 2}
A: Odd numbers: {9, 13}. Adding them: 9 + 13 = 22\n\n`;

  const question = `Q: Sum the odd numbers in the following set: {15, 13, 82, 7, 14}
A:`;

  console.log(await getResponse(example + question));
}
main();
