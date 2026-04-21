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

# OpenAI API Fundamentals

## Chapter 1: Introduction & First Request

AI Club | 2026

---

# What We'll Learn Today

1. **OpenAI API** гэж юу вэ, яагаад хэрэгтэй
2. **Prompt Engineering** -- илүү сайн хариу авах арга техник
3. **Parameters** -- temperature, max_completion_tokens
4. **Roles** -- system, user, assistant
5. **Multi-turn conversations** -- chatbot бүтээх

**Tech stack:** TypeScript + OpenAI SDK

---

# Your Background

- Next.js, TypeScript, PostgreSQL -- **6 months**
- **8-9 projects** completed
- OpenAI SDK ашиглаж integration хийсэн

**Today's goal:** API call хийхээс цааш -- **яагаад** өөр өөр technique илүү сайн үр дүн өгдөгийг ойлгох

---

# ChatGPT vs OpenAI API

|               | **ChatGPT**   | **OpenAI API**           |
| ------------- | ------------- | ------------------------ |
| Хэн ашиглах   | End users     | **Developers**           |
| Interface     | Web/App UI    | Code (HTTP / SDK)        |
| Customization | Тийм ч их биш | **Бүрэн удирдах**        |
| Integration   | Боломжгүй     | **Та нарын app-д нэмнэ** |
| Pricing       | Subscription  | **Token-д суурилсан**    |

> ChatGPT = бэлэн бүтээгдэхүүн
> API = **engine** -- өөрийн бүтээгдэхүүнд суулгах

---

# OpenAI API -- How It Works

```
   Your App (TypeScript)
         |
         | HTTP Request (model + messages)
         v
   ┌─────────────────────┐
   │   OpenAI API Server  │
   │   (gpt-4o-mini, etc) │
   └─────────────────────┘
         |
         | JSON Response (choices, usage)
         v
   Your App (display result)
```

**Request илгээнэ → Model боловсруулна → Response буцаана**

---

# Available Models (2026)

| Model         | Speed  | Quality   | Price              |
| ------------- | ------ | --------- | ------------------ |
| `gpt-4o-mini` | Fast   | Good      | **$0.15/1M input** |
| `gpt-4o`      | Medium | Great     | $2.50/1M input     |
| `gpt-4.1`     | Medium | Best      | $2.00/1M input     |
| `o4-mini`     | Slower | Reasoning | $1.10/1M input     |

**Today:** `gpt-4o-mini` -- хурдан, хямд, суралцахад тохиромжтой

---

# Setup

```bash
# Install dependencies
npm install openai

# Set API key in .env
OPENAI_API_KEY=sk-your-key-here
```

```typescript
import OpenAI from "openai";

// Automatically reads OPENAI_API_KEY from .env
const client = new OpenAI();
```

---

# Your First API Request

```typescript
import OpenAI from "openai";

const client = new OpenAI();

const response = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: "What is TypeScript?" }],
});

console.log(response.choices[0].message.content);
```

**3 key parts:**

1. `model` -- ямар model ашиглах
2. `messages` -- юу илгээх (role + content)
3. `response.choices[0].message.content` -- хариу авах

---

# The Response Object

```typescript
{
  choices: [{
    message: {
      role: "assistant",
      content: "TypeScript is a typed superset..."
    }
  }],
  usage: { prompt_tokens: 12, completion_tokens: 45 }
}
```

**Хариу авах:** `response.choices[0].message.content`
**Token тоо:** `response.usage.prompt_tokens`

---

# Real-World Use Cases

**Та нарын Next.js app-д:**

- **Customer support chatbot** -- хэрэглэгчийн асуултад автомат хариулах
- **Content generation** -- blog post, product description бичих
- **Data extraction** -- бүтэцгүй текстээс мэдээлэл гаргах
- **Translation** -- олон хэлний дэмжлэг
- **Code assistant** -- код тайлбарлах, generate хийх
- **Summarization** -- урт текстийг товчлох

---

<!-- _class: lead -->

# Hands-On Time

## `npx tsx task-01-api-request.ts`

Эхний API request-ээ ажиллуулна!
