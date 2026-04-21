/**
 * Task 06: Custom Output Format
 * Chapter 1: Introduction to Prompt Engineering Best Practices
 *
 * Текстийн хэлийг илрүүлж, гарчиг үүсгэ. Custom output format ашигла.
 *
 * Зааварчилгаа:
 * 1. instructions: хэл илрүүлж, гарчиг үүсгэхийг зааж өг
 * 2. outputFormat: дараах хэлбэрт хариу өгүүлэ:
 *      Text: [original text]
 *      Language: [detected language]
 *      Title: [generated title]
 * 3. Prompt-г нэгтгэж template literal-аар text оруул
 *
 * Ажиллуулах: npx tsx "1. Introduction to Prompt Engineering Best Practices/task-06-custom-output-format.ts"
 */

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
  // TODO 1: instructions string бич
  // const instructions = "...";

  // TODO 2: outputFormat string бич -- яг дараах format:
  // Text: [original text]
  // Language: [detected language]
  // Title: [generated title]
  // const outputFormat = "...";

  // TODO 3: Prompt нэгтгэж, text-г delimiter-оор оруул
  // const prompt = instructions + outputFormat + `\n\n\`\`\`${text}\`\`\``;

  // const response = await getResponse(prompt);
  // console.log(response);
}

main();
