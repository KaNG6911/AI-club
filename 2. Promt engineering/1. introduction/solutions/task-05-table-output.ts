/** SOLUTION -- Task 05: Table Output */
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
  const prompt =
    "Generate a markdown table of 10 must-read science fiction books. " +
    "Include exactly these columns: Title, Author, Year. " +
    "Sort by year descending.";
  console.log(await getResponse(prompt));
}
main();
