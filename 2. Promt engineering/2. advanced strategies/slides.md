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

## Chapter 2: Advanced Strategies

AI Club | 2026

---

# Өнөөдрийн хичээл

1. **Few-shot prompting** -- жишээ ашиглан output control хийх
2. **Multi-step prompting** -- нарийн ажлыг алхам алхмаар задлах
3. **Chain-of-Thought** -- reasoning алхмуудыг гаргуулах
4. **Self-consistency** -- олон замаар шийдэж majority vote авах
5. **Iterative refinement** -- prompt-г давтан сайжруулах
6. **Summarization & Expansion** -- текст богиносгох, өргөжүүлэх
7. **Text Transformation** -- орчуулах, tone өөрчлөх, сайжруулах

---

# Few-Shot: Zero / One / Few

```
Zero-shot:  Instruction only
One-shot:   Instruction + 1 example
Few-shot:   Instruction + 2+ examples
```

**One-shot -- output format control:**

```typescript
const prompt = `
Given a set of numbers, return only the odd numbers.

Example:
[1, 3, 7, 12, 19] -> [1, 3, 7, 19]

Now solve:
[3, 5, 11, 12, 16] ->
`;
```

**1 жишээ нэмснээр format consistent болно**

---

# Few-Shot with Chat Roles

```typescript
const response = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "system", content: "You are a sentiment classifier." },

    // Few-shot examples (developer-ийн бичсэн)
    { role: "user", content: "The product quality exceeded my expectations" },
    { role: "assistant", content: "1" },

    { role: "user", content: "Terrible experience with customer service" },
    { role: "assistant", content: "-1" },

    // Classify хийх мессеж
    { role: "user", content: "The price is fair given its features." },
  ],
  temperature: 0,
});
```

---

# Multi-Step Prompting

**Single-step:** "Help me plan a beach vacation" → урт, ерөнхий хариу

**Multi-step:** Алхмуудыг тодорхой зааж өгсөн

```typescript
const prompt = `Help me plan a beach vacation with these steps:

Step 1: Suggest 4 potential beach destinations.
Step 2: For each destination, list:
   - 2-3 accommodation options
   - 3 activities to do
   - Pros and cons
Step 3: Give a final recommendation based on value for money.`;
```

**Алхам бүр нь model-ийн "focus"-г тодорхойлно**

---

# Chain-of-Thought (CoT)

**"Think step by step"** -- хамгийн хялбар CoT trigger

```typescript
// Without CoT
const prompt = `My friend is 20. Their father is twice their age.
How old will the father be in 10 years?`;
// Model may answer directly: "50" (wrong! 20×2=40, 40+10=50 -- actually correct)

// With CoT
const prompt = `My friend is 20. Their father is twice their age.
How old will the father be in 10 years?

Think step by step.`;
// Step 1: Friend's age = 20
// Step 2: Father's age = 20 × 2 = 40
// Step 3: In 10 years = 40 + 10 = 50
// Answer: 50
```

---

# One-Shot Chain-of-Thought

**Жишээгээр reasoning pattern заах:**

```typescript
const example = `
Q: Sum the even numbers in: [9, 10, 13, 4, 2]
A: Even numbers: [10, 4, 2]. Sum: 10 + 4 + 2 = 16
`;

const question = `
Q: Sum the even numbers in: [15, 13, 82, 7, 14]
A:`;

const prompt = example + question;
```

**Model жишээний reasoning pattern-г дагана**

---

# Self-Consistency

**Нэг асуудал → олон шийдэл → majority vote**

```typescript
const prompt = `
Solve the following problem using a self-consistency approach.

Imagine 3 independent experts each solving it step by step.
After all 3 solutions, compare answers and use majority vote.
State the final answer clearly.

Problem: ${problemToSolve}
`;
```

**Хэрэглэх тохиолдол:**

- Тооцоологийн нарийн асуудал
- Нэг шийдэл найдвартай биш байх нөхцөл
- High-stakes decision support

---

# Iterative Prompt Refinement

```
1. Draft prompt  →  Feed to model  →  Observe output
        ↑                                     |
        └─────── Refine & repeat ─────────────┘
```

**Нийтлэг refinement pattern-ууд:**

| Асуудал                   | Засвар                              |
| ------------------------- | ----------------------------------- |
| Format буруу              | Output format тодорхой зааж өгөх    |
| Хэт урт/богино            | `max_tokens` эсвэл word count нэмэх |
| Few-shot жишээ хангалтгүй | Edge case жишээ нэмэх               |
| Эрхзүйн асуудал           | Condition нэмэх ("if X, respond Y") |

**Prompt engineering бол нэг удаагийн ажил биш -- итератив процесс**

---

# Summarization

```typescript
const prompt = `
Summarize the following market research report in no more than 5 sentences.
Focus specifically on: AI adoption trends and data privacy concerns.

Report:
${report}
`;
```

**Хяналтын параметрүүд:**

- Урт: "5 sentences", "3 bullet points", "under 50 words"
- Focus: "focusing on X", "emphasizing Y"
- Audience: "for a non-technical executive"
- Format: "as bullet points", "as a paragraph"

---

# Expansion & Transformation

**Expansion** -- товч мэдээллийг дэлгэрэнгүй болгох:

```typescript
const prompt = `Expand the following product bullet points into
a professional one-paragraph description. Highlight unique features,
benefits, and potential use cases.

Bullet points:
${bulletPoints}`;
```

**Transformation** -- контентийн формыг өөрчлөх:

```typescript
// Translation
`Translate the following text to French, Spanish, and Japanese: ${text}`
// Tone adjustment
`Rewrite the following email with a professional and user-centric tone: ${email}`
// Writing improvement
`Step 1: Proofread (fix grammar, spelling). Step 2: Adjust tone to formal and friendly.
Text: ${text}`;
```

---

<!-- _class: lead -->

# Hands-On Time

## Tasks 08-18

Few-shot, multi-step, CoT, self-consistency, summarization, transformation
