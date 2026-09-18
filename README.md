# Local AI Chat App | Privacy-First Conversational AI

A full-stack local AI chat application that lets users interact with open-source language models using LM Studio or similar OpenAI-compatible local runtimes. The system is designed for privacy-first AI usage without relying on external cloud APIs.

> GitHub: https://github.com/harsh080705/local-ai-chat

## ATS-Friendly Summary

Full-stack JavaScript application for local AI chatbot experiences using React, Express, and local model hosting. Demonstrates integration with open-source LLMs, private AI workflows, chat history, API proxying, and modern frontend development principles.

## Keywords

Local AI, Open-Source LLM, LM Studio, Ollama, React, Node.js, Express, AI Chatbot, Privacy-First AI, Generative AI, Vite, JavaScript, Full-Stack

## Features

- Local LLM integration
- Multi-turn conversation memory
- Real-time backend health checks
- AI chat interface with modern dark theme
- No external API key required
- Environment-based configuration

## Architecture

```bash
React Frontend -> Express Backend -> LM Studio / OpenAI-compatible local model
```

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19, Vite |
| Backend | Express.js, Node.js |
| AI Runtime | LM Studio / local LLM server |
| Language | JavaScript |

## Quick Start

### 1. Start the local LLM server

Open LM Studio and run a model locally.

### 2. Start backend

```bash
cd local-ai-backend
npm install
npm run start
```

### 3. Start frontend

```bash
cd local-ai-frontend
npm install
npm run dev
```

Open: http://localhost:5173

## Why This Project Matters

This project is ideal for showcasing AI application development, local inference workflows, and privacy-first product thinking. It reinforces skill in frontend/backend integration and practical AI deployment patterns.

## License

MIT

---

Built to demonstrate private, local-first AI interactions and modern JavaScript full-stack engineering.
