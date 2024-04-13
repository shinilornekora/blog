import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log(`Инициализация завершена.\nСервер запущен на порту 3000`);
});