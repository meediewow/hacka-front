const express = require('express');
const path = require('node:path');

const app = express();

const staticFilesPath = path.join(__dirname, 'dist');

app.use(express.static(staticFilesPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(staticFilesPath, 'index.html'));
});

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
