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

## Chapter 4: Chatbot Development

AI Club | 2026

---

# Өнөөдрийн хичээл

1. **System prompt** -- chatbot-ийн зан байдал тодорхойлох
2. **Behavior control** -- нөхцөлт хариу, guardrails
3. **Role-playing prompts** -- chatbot-д тусгай дүр өгөх
4. **Response guidelines** -- хариуны урт, format, зан байдал
5. **External context** -- sample conversations болон system prompt-оор context өгөх

---

# Chatbot System Prompt -- Бүтэц

```typescript
const systemPrompt = [
  chatbotPurpose,       // Энэ chatbot юу хийдэг вэ?
  audienceGuidelines,   // Хэнд зориулсан?
  toneGuidelines,       // Хэрхэн ярих вэ?
  behaviorConditions,   // Ямар нөхцөлд яах вэ?
  responseGuidelines,   // Хариуны format, урт
].join("\n");
```

**Бүрэлдэхүүн бүрийг тусдаа string-д хадгал:**
- Засахад хялбар
- A/B test хийхэд тохиромжтой
- Readable code

---

# Chatbot Purpose & Audience

```typescript
const chatbotPurpose =
  "You are a customer support chatbot for an e-commerce company " +
  "specializing in electronics. Your role is to assist customers " +
  "with product inquiries, order tracking, and troubleshooting issues.";

const audienceGuidelines =
  "The target audience consists of tech-savvy individuals " +
  "interested in purchasing electronic gadgets.";

const toneGuidelines =
  "Use a professional and user-friendly tone. " +
  "Be concise and helpful in every response.";
```

---

# Behavior Conditions -- Guardrails

```typescript
const orderNumberCondition =
  "If a user asks about an order but does not provide an order number, " +
  "politely ask them to provide their order number before proceeding.";

const technicalIssueCondition =
  "If a user reports a technical issue, begin your response with: " +
  "'I'm sorry to hear about your issue with [product/feature].' " +
  "Then provide troubleshooting steps.";

const refinedSystemPrompt =
  baseSystemPrompt + "\n" +
  orderNumberCondition + "\n" +
  technicalIssueCondition;
```

**Condition бүр = chatbot-ийн нэг "дүрэм"**

---

# Role-Playing Prompts

**Generic chatbot vs Role-based chatbot:**

```typescript
// Generic
const systemPrompt = "You are a helpful assistant.";

// Role-based
const systemPrompt =
  "Act as an experienced learning advisor specializing in tech education. " +
  "You interpret learners' background, experience, and goals to recommend " +
  "a tailored learning path of textbooks from beginner to advanced level.";
```

**Role-playing-ийн давуу тал:**
- Consistent tone & vocabulary
- Domain-specific expertise
- More believable user experience

---

# Behavior & Response Guidelines

```typescript
const baseSystemPrompt =
  "Act as a learning advisor who recommends tailored learning paths.";

const behaviorGuidelines =
  "If the user does not mention their background, experience, or goals, " +
  "ask follow-up questions to gather this information before recommending.";

const responseGuidelines =
  "Recommend no more than 3 textbooks per response. " +
  "For each book, include: title, author, and why it suits the user.";

const systemPrompt = baseSystemPrompt + "\n" + behaviorGuidelines + "\n" + responseGuidelines;
```

---

# External Context -- Яагаад хэрэгтэй вэ?

**LLM-ийн хязгаарлалт:**
- Training data-д байхгүй мэдээлэл мэдэхгүй
- Private company мэдээлэл мэдэхгүй
- Knowledge cutoff-оос хойших мэдээлэл мэдэхгүй

**2 арга:**

| Арга | Хэзээ ашиглах |
|------|---------------|
| Sample conversations | Тусгай Q&A pair-г загварчлах |
| System prompt context | Компанийн мэдээллийг inject хийх |

---

# Context via Sample Conversations

```typescript
const response = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "system", content: "You are a helpful delivery service assistant." },

    // Context Q&A pair (developer-ийн бичсэн)
    { role: "user",      content: "What items do you deliver?" },
    { role: "assistant", content: "We deliver groceries, electronics, furniture..." },

    // Хэрэглэгчийн бодит асуулт
    { role: "user", content: "Do you deliver furniture?" },
  ],
});
```

---

# Context via System Prompt

```typescript
const serviceDescription = `
MyPersonalDelivery offers:
- Same-day delivery for groceries and medications
- Standard 2-day delivery for electronics and clothing
- Large item delivery for furniture (scheduled)
- We do NOT deliver hazardous materials
`;

const systemPrompt =
  "You are a customer service chatbot for MyPersonalDelivery. " +
  "Answer queries based on the following service information:\n\n" +
  serviceDescription + "\n\n" +
  "Be gentle and helpful in every response.";
```

**Production-д:** serviceDescription = database query / API call

---

# Course Summary

| # | Technique | Key insight |
|---|-----------|-------------|
| 1 | **Roles & getResponse** | system → AI rules, user → input |
| 2 | **Delimiters** | ``` ``` ``` тусгаарлана |
| 3 | **Structured output** | Format заагаагүй бол inconsistent |
| 4 | **Conditional prompts** | if/else logic prompt-д ажилладаг |
| 5 | **Few-shot** | Жишээ = format control |
| 6 | **CoT** | "Think step by step" = accuracy ↑ |
| 7 | **Self-consistency** | 3 expert + majority vote |
| 8 | **Summarize/Expand** | Урт/товч хяналтыг prompt-д зааж өг |
| 9 | **Role-playing** | Дүр = consistent persona |
| 10 | **External context** | Company data → system prompt |

---

<!-- _class: lead -->

# Hands-On Time

## Tasks 26-32

System prompts, role-playing, behavior control, external context
