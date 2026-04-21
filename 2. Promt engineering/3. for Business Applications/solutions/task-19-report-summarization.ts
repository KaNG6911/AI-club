/** SOLUTION -- Task 19: Report Summarization */
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

const report = `The global technology market is experiencing rapid transformation driven by artificial intelligence and increasing data privacy concerns. AI adoption has surged 45% year-over-year, with companies integrating machine learning into customer service, supply chain optimization, and product development. However, consumers are becoming more privacy-conscious, with 73% citing data security as a primary factor in purchasing decisions. Regulations like GDPR and CCPA are reshaping how businesses collect and use customer data. Companies that balance AI innovation with transparent data practices are seeing stronger customer loyalty and 28% higher retention rates. Early adopters of AI with strong privacy frameworks report 35% faster decision-making.`;

async function main() {
  const prompt = `Summarize the following market research report in no more than 5 sentences.\nFocus specifically on:\n- How AI is shaping the market\n- How data privacy is impacting customer behavior\nAudience: C-level executive with limited time.\n\nReport:\n${report}`;
  console.log("Summarized report:\n", await getResponse(prompt));
}
main();
