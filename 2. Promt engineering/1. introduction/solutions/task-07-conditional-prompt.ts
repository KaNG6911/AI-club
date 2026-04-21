/** SOLUTION -- Task 07: Conditional Prompt */
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

const textA =
  "Climate change is one of the most pressing challenges of our time. " +
  "Scientists agree that immediate action is necessary to limit global warming. " +
  "Renewable energy sources are becoming increasingly affordable and widespread.";

const textB = "The book is on the table.";

async function analyzeText(text: string): Promise<void> {
  const instructions =
    "Analyze the text delimited by triple backticks. " +
    "Detect the language and count the number of sentences. " +
    "If the text has MORE than one sentence, generate a suitable title. " +
    "If it has exactly one sentence, write 'N/A' for the title.\n\n";
  const outputFormat =
    "Return in this exact format:\nLanguage: [language]\nSentences: [count]\nTitle: [title or N/A]\n\n";
  const prompt = instructions + outputFormat + `\`\`\`${text}\`\`\``;
  console.log(await getResponse(prompt));
}

async function main() {
  console.log("=== TEXT A ===");
  await analyzeText(textA);
  console.log("\n=== TEXT B ===");
  await analyzeText(textB);
}
main();
