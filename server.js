const express = require('express');
const app = express();
const path = require('path');

// Настройка для отдачи статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера на порту 3000
const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});