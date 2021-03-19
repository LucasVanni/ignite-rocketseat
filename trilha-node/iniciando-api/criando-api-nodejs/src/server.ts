import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
    res.send('Welcome my friends');
});

app.post('/courses', (req, res) => {
    const { name } = req.body;

    return res.status(201).json({ name });
});

app.listen(3333, () => console.log('Server is running 🚀'));
