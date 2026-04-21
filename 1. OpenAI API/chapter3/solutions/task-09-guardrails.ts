/**
 * SOLUTION -- Task 9: Adding Guardrails
 */

import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const sysMsg = `You are a study planning assistant that creates plans for learning new skills.

If these skills are non related to languages, return the message:

'Apologies, to focus on languages, we no longer create learning plans on other topics.'
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: sysMsg },
      { role: "user", content: "Help me learn to rollerskating." },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();
