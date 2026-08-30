import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;
const LM_STUDIO_URL = process.env.LM_STUDIO_URL || 'http://localhost:1234/v1/chat/completions';

app.use(cors());
app.use(express.json());

// Health check endpoint to verify backend & LM Studio connection
app.get('/api/health', async (req, res) => {
    try {
        const lmStudioHost = LM_STUDIO_URL.replace(/\/v1\/chat\/completions\/?$/, '');
        const response = await fetch(`${lmStudioHost}/v1/models`, { method: 'GET' });
        const lmConnected = response.ok;
        res.json({ status: 'ok', lmStudioConnected: lmConnected });
    } catch (error) {
        res.json({ status: 'ok', lmStudioConnected: false, error: 'LM Studio unreachable' });
    }
});

// Chat endpoint receives prompts/messages from frontend and forwards to LM Studio
app.post('/api/chat', async (req, res) => {
    const { prompt, messages } = req.body;

    let formattedMessages = [];

    if (Array.isArray(messages) && messages.length > 0) {
        formattedMessages = messages.map((msg) => ({
            role: msg.role === 'ai' || msg.role === 'assistant' ? 'assistant' : 'user',
            content: msg.text || msg.content || '',
        }));
    } else if (prompt) {
        formattedMessages = [{ role: 'user', content: prompt }];
    } else {
        return res.status(400).json({ error: 'Prompt or messages array is required.' });
    }

    try {
        const response = await fetch(LM_STUDIO_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'loaded-model',
                messages: formattedMessages,
            }),
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`LM Studio error (${response.status}): ${errText}`);
        }

        const data = await response.json();
        const aiReply = data.choices?.[0]?.message?.content || 'No response received from model.';

        res.json({ reply: aiReply });
    } catch (error) {
        console.error('Error connecting to LM Studio:', error.message);
        res.status(500).json({
            error: 'Ensure LM Studio local server is started on port 1234!',
            details: error.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Your Node AI Server is live at http://localhost:${PORT}`);
});