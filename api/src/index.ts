import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/healthz', (_req, res) => res.send('OK'));
app.get('/', (_req, res) => res.json({ message: 'Hello AIVtuber!' }));
app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));