/**
 * Task 05: Structured Output -- Table
 * Chapter 1: Introduction to Prompt Engineering Best Practices
 *
 * Science fiction номны жагсаалтыг хүснэгт хэлбэрт гаргуул.
 *
 * Зааварчилгаа:
 * 1. Prompt бич: 10 science fiction ном, 3 bagana -- Title, Author, Year
 * 2. Markdown table format ашиглахыг зааж өг
 * 3. Хариуг хэвлэ
 *
 * Ажиллуулах: npx tsx "1. Introduction to Prompt Engineering Best Practices/task-05-table-output.ts"
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

async function main() {
  // TODO: Prompt бич
  // - 10 must-read science fiction ном
  // - Багана: Title, Author, Year
  // - Markdown table format

  // const prompt = "...";
  // const response = await getResponse(prompt);
  // console.log(response);
}

main();

// Туршилт: Format заагаагүй бол model яаж хариу өгдөг вэ?
// "as a markdown table" гэсэн заавар байгаа/байхгүй үед харьцуул.
