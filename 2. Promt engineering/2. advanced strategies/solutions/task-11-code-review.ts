/** SOLUTION -- Task 11: Multi-Step Code Review */
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

const functions = [
  `function calculateArea(length: number, width: number): number {\n  return length * width;\n}`,
  `function greet(name) {\n  console.log("Hello " + name)\n  // missing return\n}`,
  `function add(a: number, b: number, c: number): number {\n  return a + b + c;\n}`,
];

async function reviewFunction(code: string): Promise<void> {
  const prompt = `Evaluate the following TypeScript function step by step.

Step 1: Check if the syntax is valid TypeScript. Say Pass or Fail with reason.
Step 2: Check if the function receives exactly 2 inputs. Say Pass or Fail with reason.
Step 3: Check if the function returns exactly 1 output. Say Pass or Fail with reason.
Step 4: Give a final summary verdict.

Function:
\`\`\`typescript
${code}
\`\`\``;
  console.log(await getResponse(prompt));
  console.log("---");
}

async function main() {
  for (const fn of functions) {
    console.log(`Reviewing:\n${fn}\n`);
    await reviewFunction(fn);
  }
}
main();
