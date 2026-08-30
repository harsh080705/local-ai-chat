import { useState, useEffect, useRef } from 'react';
import './App.css';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState({ online: false, lmConnected: false });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const checkHealth = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/health`);
      if (res.ok) {
        const data = await res.json();
        setServerStatus({ online: true, lmConnected: !!data.lmStudioConnected });
      } else {
        setServerStatus({ online: false, lmConnected: false });
      }
    } catch {
      setServerStatus({ online: false, lmConnected: false });
    }
  };

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', text: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to communicate with local AI backend.');
      }

      setMessages((prev) => [...prev, { role: 'ai', text: data.reply }]);
    } catch (error) {
      console.error('Error connecting to backend:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'error', text: error.message || 'Failed to connect to backend server.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusDetails = () => {
    if (!serverStatus.online) return { text: 'Backend Offline', class: 'offline' };
    if (!serverStatus.lmConnected) return { text: 'LM Studio Disconnected', class: 'warning' };
    return { text: 'LM Studio Ready', class: 'online' };
  };

  const status = getStatusDetails();

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h2>Local Gemma AI</h2>
        <div className="status-badge" title={status.text}>
          <span className={`status-dot ${status.class}`}></span>
          <span className="status-label">{status.text}</span>
        </div>
      </header>

      <div className="chat-window">
        {messages.length === 0 && (
          <p className="placeholder-text">Ask your local AI model something...</p>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`message-bubble ${msg.role}`}>
            <strong>{msg.role === 'user' ? 'You' : msg.role === 'ai' ? 'Gemma' : 'System'}:</strong>
            <p>{msg.text}</p>
          </div>
        ))}
        {loading && <div className="message-bubble ai loading">Gemma is thinking...</div>}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="chat-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>Send</button>
      </form>
    </div>
  );
}

export default App;