/** SOLUTION -- Task 06: Custom Output Format */
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

const text =
  "Le réchauffement climatique est l'un des défis les plus pressants de notre époque. " +
  "Les scientifiques s'accordent à dire que des actions immédiates sont nécessaires.";

async function main() {
  const instructions = "Determine the language and generate a suitable title for the text delimited by triple backticks. ";
  const outputFormat =
    "Return the result in this exact format:\nText: [original text]\nLanguage: [detected language]\nTitle: [generated title]";
  const prompt = instructions + outputFormat + `\n\n\`\`\`${text}\`\`\``;
  console.log(await getResponse(prompt));
}
main();
