import express from 'express';

const app = express();

app.get('/', (_req, res) => {
    res.send('Welcome my friends');
});

app.listen(3333, () => console.log('Server is running 🚀'));
