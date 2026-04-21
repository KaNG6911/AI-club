---
marp: true
theme: default
paginate: true
header: "AI Club"
footer: ""
style: |
  section {
    font-family: 'Inter', 'Helvetica Neue', sans-serif;
  }
  section.lead {
    text-align: center;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: white;
  }
  section.lead h1 {
    color: #38bdf8;
    font-size: 2.8em;
  }
  section.lead h2 {
    color: #94a3b8;
  }
  code {
    background: #f1f5f9;
    border-radius: 4px;
    padding: 2px 6px;
  }
  pre {
    background: #f8fafc !important;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
  }
  pre code {
    color: #1e293b !important;
    background: transparent;
  }
  strong { color: #0ea5e9; }
  table { font-size: 0.85em; }
---

<!-- _class: lead -->

# Prompt Engineering

## Chapter 3: Business Applications

AI Club | 2026

---

# Өнөөдрийн хичээл

1. **Summarization** -- маркетингийн мэдээлэл, бүтээгдэхүүний тайлбар
2. **Text transformation** -- орчуулга, tone, чанарын сайжруулалт
3. **Text analysis** -- sentiment classification, entity extraction
4. **Code generation** -- функц бичих, жишээгээр сургах, тайлбарлах

**Зорилго:** Туршилтаас бодит бизнесийн application руу шилжих

---

# Business Summarization -- Зарчмууд

**Effective summarization prompt:**

```typescript
const prompt = `
Summarize the following market research report in no more than 5 sentences.

Focus specifically on:
- How AI is shaping the market
- How data privacy is impacting customer behavior

Audience: C-level executive with limited time.
Format: Plain paragraph, no bullet points.

Report:
${report}
`;
```

**Audience + Focus + Format = бизнест хэрэглэгдэхүйц output**

---

# Product Description Summarization

```typescript
const prompt = `
Summarize the following product description in no more than 5 bullet points.
Each bullet point should be under 15 words.
Focus on features that differentiate this product from competitors.

Product description:
${productDescription}
`;
```

**E-commerce-д хэрэглэх тохиолдол:**
- Product listing page-д concise summary
- Comparison table-д key features
- Mobile-д богино version

---

# Text Expansion

```typescript
const bulletPoints = `
- 4K Ultra HD camera
- Motion detection alerts
- 2-way audio
- Night vision up to 30ft
- Works with Alexa and Google Home
`;

const prompt = `
Expand the following product bullet points into a comprehensive
one-paragraph product description.

Highlight: unique features, customer benefits, and potential use cases.
Tone: professional but approachable.
Audience: tech-savvy homeowners.

Bullet points:
${bulletPoints}
`;
```

---

# Multilingual Translation

```typescript
const marketingMessage = "Introducing our latest collection of premium leather handbags...";

const prompt = `
Translate the following marketing message from English to:
1. French
2. Spanish
3. Japanese

Preserve the marketing tone and excitement in each translation.
Label each translation clearly.

Message:
${marketingMessage}
`;
```

**Production tip:** Translation output-г native speaker-аар verify хийх хэрэгтэй

---

# Text Analysis -- Classification

**Sentiment analysis:**

```typescript
const prompt = `
Classify the sentiment of each customer review as POSITIVE, NEGATIVE, or NEUTRAL.
Return one word per review.

Reviews:
1. "Absolutely love this product!"
2. "Broke after one week, very disappointed."
3. "It's okay, nothing special."
`;
```

**Entity extraction:**

```typescript
const prompt = `
Extract product specifications from the description below.
Return as: Name, Display Size, Camera Resolution, Battery.

Description: ${description}
`;
```

---

# Code Generation

**Problem description approach:**

```typescript
const prompt = `
Write a TypeScript function that:
- Receives an array of 12 numbers (monthly sales figures)
- Returns the month number (1-12) with the highest sales
- Handles ties by returning the first occurrence

Include the function signature with proper types.
`;
```

**Input-output examples approach:**

```typescript
const examples = `
input: [10, 5, 8] -> output: 23
input: [5, 2, 4]  -> output: 11
input: [2, 1, 3]  -> output: 6
`;

const prompt = `Infer the TypeScript function that maps these inputs to outputs:\n${examples}`;
```

---

# Code Explanation with CoT

```typescript
const prompt = `
Explain what the following function does step by step.

Step 1: Identify the function's inputs and outputs.
Step 2: Walk through the logic line by line.
Step 3: Summarize the function's overall purpose in one sentence.

Function:
\`\`\`typescript
${functionCode}
\`\`\`
`;
```

**Хэрэглэх тохиолдол:**
- Legacy code ойлгох
- Code review
- Onboarding шинэ хөгжүүлэгчдэд

---

<!-- _class: lead -->

# Hands-On Time

## Tasks 19-25

Summarization, translation, sentiment analysis, code generation
