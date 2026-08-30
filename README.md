# 🤖 Local AI Chat App (React + Node.js + LM Studio / Gemma)

A full-stack web application that allows you to chat locally with open-source AI models (such as **Gemma**, **Llama**, **Mistral**, etc.) using **LM Studio** and **React**.

No cloud API keys or internet connection required — your data stays 100% private on your machine!

---

## 🏗️ Architecture

```
┌─────────────────────────┐       ┌─────────────────────────┐       ┌─────────────────────────┐
│                         │       │                         │       │                         │
│     React Frontend      │ ───►  │     Express Backend     │ ───►  │        LM Studio        │
│  (local-ai-frontend)    │       │   (local-ai-backend)    │       │   (Local LLM Server)    │
│    http://localhost:5173│       │    http://localhost:5000│       │    http://localhost:1234│
└─────────────────────────┘       └─────────────────────────┘       └─────────────────────────┘
```

- **Frontend**: React 19 + Vite (Dark mode UI, conversation history, real-time backend health check, auto-scroll).
- **Backend**: Express.js middleware (Manages API routes, handles CORS, proxies chat completions, multi-turn history formatting).
- **Local AI Server**: LM Studio exposing an OpenAI-compatible endpoint at `http://localhost:1234`.

---

## ⚡ Prerequisites

Before running the application, make sure you have installed:

1. **[Node.js](https://nodejs.org/)** (v18 or higher)
2. **[LM Studio](https://lmstudio.ai/)** (or any local LLM runner with OpenAI API compatibility like Ollama or vLLM).

---

## 🚀 Quick Start Guide

### Step 1: Start LM Studio Local Server
1. Open **LM Studio** and download a model (e.g., `Gemma 2B / 7B`, `Llama 3`, or `Mistral`).
2. Go to the **Local Server** tab (the icon on the left sidebar).
3. Select your model and click **Start Server**.
4. Ensure the server is listening at `http://localhost:1234`.

---

### Step 2: Set Up & Run Backend
Open a terminal in the root directory:

```bash
cd local-ai-backend
npm install
npm run start
```
The Express backend server will start at `http://localhost:5000`.

---

### Step 3: Set Up & Run Frontend
Open a new terminal window:

```bash
cd local-ai-frontend
npm install
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## ⚙️ Environment Variables

Both backend and frontend support optional `.env` configuration files.

### Backend (`local-ai-backend/.env`)
```env
PORT=5000
LM_STUDIO_URL=http://localhost:1234/v1/chat/completions
```

### Frontend (`local-ai-frontend/.env`)
```env
VITE_API_URL=http://localhost:5000
```

---

## ✨ Features

- 💬 **Multi-Turn Conversation Memory**: Retains chat history for context-aware responses.
- 🟢 **Live Health Monitoring**: Automatically checks connection status of the backend and local AI server.
- 📜 **Auto-Scrolling**: Keeps newest messages in view as chat length grows.
- 🔒 **100% Local & Private**: No data sent to third-party cloud APIs.
- 🎨 **Dark Theme**: Modern, sleek interface built for developer productivity.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

