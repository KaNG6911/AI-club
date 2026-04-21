/**
 * Task 14: Self-Consistency Prompting
 * Chapter 2: Advanced Prompt Engineering Strategies
 *
 * 3 "expert"-г ашиглан majority vote-оор хамгийн найдвартай хариуг ол.
 *
 * Зааварчилгаа:
 * 1. selfConsistencyInstruction бич:
 *    - 3 independent expert
 *    - Expert бүр алхам алхмаар шийдэнэ
 *    - Majority vote-оор эцсийн хариу гаргана
 * 2. problemToSolve-г instruction-д нэм
 * 3. Хариуг хэвлэ
 *
 * Ажиллуулах: npx tsx "2. Advanced Prompt Engineering Strategies/task-14-self-consistency.ts"
 */

import OpenAI from "openai";

const client = new OpenAI();

async function getResponse(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
    max_tokens: 600,
  });
  return response.choices[0].message.content ?? "";
}

const problemToSolve = `
You own a store that sells laptops and mobile phones.
You start the day with 50 devices: 60% are mobile phones.
During the day:
- 3 customers each bought 1 mobile phone
- 1 of those customers also bought 1 laptop
- You restocked: 10 laptops and 5 mobile phones

How many laptops and mobile phones do you have at the end of the day?
`;

async function main() {
  // TODO: selfConsistencyInstruction бич
  // - 3 independent expert-г imagine хий
  // - Expert бүр алхам алхмаар шийдэнэ
  // - 3 хариуг харьцуулж majority vote-оор дүгнэ

  // const selfConsistencyInstruction = `...`;
  // const prompt = selfConsistencyInstruction + problemToSolve;
  // const response = await getResponse(prompt);
  // console.log(response);
}

main();

// Зөв хариу: 20 laptop, 32 mobile phone
// Laptop: 50×0.4=20, -1+10=29 → буруу. Дахин тооцоол:
// Эхний: mobile=30, laptop=20
// Худалдсан: 3 mobile, 1 laptop
// Нэмсэн: 10 laptop, 5 mobile
// Эцэст: laptop=20-1+10=29, mobile=30-3+5=32
