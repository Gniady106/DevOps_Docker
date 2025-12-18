const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/message', (req, res) => {
    res.json({ message: 'Wiadomość z backendu 🚀' });
});

app.listen(PORT, () => console.log(`Backend działa na porcie ${PORT}`));
