/** SOLUTION -- Task 14: Self-Consistency */
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

const problemToSolve = `You own a store that sells laptops and mobile phones. You start the day with 50 devices: 60% are mobile phones. During the day: 3 customers each bought 1 mobile phone, 1 of those customers also bought 1 laptop. You restocked: 10 laptops and 5 mobile phones. How many laptops and mobile phones do you have at end of day?`;

async function main() {
  const instruction = `Solve the following problem using a self-consistency approach.

Generate 3 independent reasoning paths (as if from 3 different experts).
Each expert solves step by step.
After all 3 solutions, compare answers and use majority vote.
State the final answer clearly.

Problem:\n`;

  console.log(await getResponse(instruction + problemToSolve));
}
main();
