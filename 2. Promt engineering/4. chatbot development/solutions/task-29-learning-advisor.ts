/** SOLUTION -- Task 29: Learning Advisor Role-Playing */
import OpenAI from "openai";
const client = new OpenAI();

async function getResponse(systemPrompt: string, userPrompt: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userPrompt }],
    temperature: 0,
  });
  return response.choices[0].message.content ?? "";
}

async function main() {
  const basePrompt = "Act as an experienced learning advisor specializing in tech education. You interpret learners' background, experience, and goals to recommend a tailored learning path of textbooks, from beginner to advanced.";
  const behaviorGuidelines = " If the user does not mention their background, experience, or goals, ask follow-up questions before recommending books.";
  const responseGuidelines = " Recommend no more than 3 textbooks per response. For each book include: title, author, and why it suits this specific user.";
  const systemPrompt = basePrompt + behaviorGuidelines + responseGuidelines;

  console.log("=== QUERY 1 (with background) ===\n", await getResponse(systemPrompt, "Hello! I'm a beginner with a marketing background, interested in Python, data analytics, and ML. Can you recommend some books?"));
  console.log("\n=== QUERY 2 (without background) ===\n", await getResponse(systemPrompt, "Hey, I'm looking for resources on Python and data visualization. What do you recommend?"));
}
main();
