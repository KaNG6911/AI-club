/** SOLUTION -- Task 04: Delimited Prompt */
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

const story = "Once upon a time, a small robot found a glowing seed in the middle of a digital forest...";

async function main() {
  const prompt = `Complete the following story following these constraints:
- Provide exactly two paragraphs.
- Use the style of William Shakespeare.

Story: \`\`\`${story}\`\`\``;

  const response = await getResponse(prompt);
  console.log("Original story:\n", story);
  console.log("\nContinuation:\n", response);
}
main();
