# 🤖 Local AI Chat — Privacy-First Conversational AI Application

![React 19](https://img.shields.io/badge/React-19.0-61dafb?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=nodedotjs)
![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?style=flat-square&logo=express)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite)
![Ollama / LM Studio](https://img.shields.io/badge/Local_AI-LM_Studio_%2F_Ollama-FF6F00?style=flat-square&logo=openai)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

> A full-stack, privacy-first conversational AI web application enabling seamless interaction with local open-source Large Language Models (LLMs) via LM Studio or Ollama OpenAI-compatible local APIs.

---

## 🎯 ATS & Resume Highlights (Copy & Paste for Resume)

> - **Engineered Privacy-First Local AI Web Application** using **React 19, Express.js, and Node.js**, eliminating cloud latency and third-party data transmission.
> - **Architected API Proxy Layer** connecting frontend interfaces with local LLM runtimes (LM Studio / Ollama), handling streaming responses and health checks.
> - **Implemented Client-Side Chat Memory & State Management**, managing multi-turn context retention and dynamic markdown rendering.

---

## 🌟 Key Features

- 🔒 **100% Data Privacy**: Inferences are executed locally on client machine—zero data sent to external cloud servers.
- ⚡ **Real-Time Response Streaming**: Low-latency token streaming and health monitoring.
- 💬 **Multi-Turn Context Memory**: Dynamic conversation state retention across model turns.
- 🎨 **Modern Dark-Mode UI**: Built with React 19 and Vite for instant load times and clean user experience.
- 🔌 **OpenAI-Compatible Local Runtime**: Compatible with LM Studio, Ollama, LocalAI, and vLLM.

---

## 🛠️ Tech Stack & Architecture

```
[ React 19 Frontend (Vite) ]  <--->  [ Express API Gateway Proxy ]  <--->  [ LM Studio / Ollama Local LLM Server ]
```

| Component | Technology | Role |
|:---|:---|:---|
| **Frontend** | React 19, Vite, JavaScript | Interactive Chat UI & State Management |
| **Backend** | Express.js, Node.js | CORS management & Local AI API Proxying |
| **Local AI Engine** | LM Studio / Ollama / LocalAI | Offline LLM Inference Server |

---

## 📁 Repository Structure

```
local-ai-chat/
├── local-ai-frontend/   # React 19 + Vite chat interface
├── local-ai-backend/    # Express REST proxy server
└── README.md
```

---

## 🚀 Quick Start

### 1. Start Local LLM Runtime
Ensure [LM Studio](https://lmstudio.ai/) or [Ollama](https://ollama.ai/) is running on port `1234` or `11434`.

### 2. Start Backend Proxy
```bash
cd local-ai-backend
npm install
npm run start
```

### 3. Start Frontend Interface
```bash
cd local-ai-frontend
npm install
npm run dev
```

Open browser at `http://localhost:5173`.

---

## 📝 License

Distributed under the **MIT License**. See `LICENSE` for details.
