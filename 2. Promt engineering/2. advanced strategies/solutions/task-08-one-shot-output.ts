/** SOLUTION -- Task 08: One-Shot Output Control */
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
  const prompt = `
Given a set of numbers, return only the odd numbers.

Example:
{1, 3, 7, 12, 19} -> {1, 3, 7, 19}

Now solve:
{3, 5, 11, 12, 16} ->
`;
  console.log(await getResponse(prompt));
}
main();
