/****************************
 * ПОДКЛЮЧЕНИЕ ЗАВИСИМОСТЕЙ *
 ****************************/

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');
const PostServiceHandler = require('./post/samples.js');


/***************************
 * КОНФИГУРАЦИЯ ПРИЛОЖЕНИЯ *
 **************************/

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));
app.use((err, req, res, next) => {
    res.status(500).send(`Something broke!<br><br>${err.stack}`);
});

const ph = new PostServiceHandler();

/************
 * РОУТИНГ *
 ************/

app.get('/posts', (_, res) => {
    const responseData = {
        data: ph.allPosts
    }

    res.status(200).json(responseData);
});

app.get('/image', (req, res) => {
    const imageName = req.params.name;

    res.status(200).sendFile(`../src/assets/${imageName}.png`);
});

app.post('/posts/upload', (req, res) => {
    // Разделяем строку base64 на метаданные и данные изображения
    const matches = req.body.content.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

    if (!matches) {
        return res.status(400).json({
            message: 'Кажется, вы не загрузили фото.'
        })
    }

    // Декодируем base64-строку в бинарные данные
    const imageData = Buffer.from(matches[2], 'base64');

    console.log(imageData)

    fs.writeFile(`../src/assets/static/${req.body.fileName}`, imageData, (err) => {
        if (err) {
            return res.status(400).json({ 
                message: 'Ошибка при сохранении файла',
                errorText: err.message,
            });
        }
    });

    res.status(200).json({
        code: 'ok'
    }); 
});

app.post('/posts/add', (req, res) => {
    ph.addPost({
        id: req.body.id,
        title: req.body.title,
        text: req.body.text,
        image: req.body.image,
    })

    res.status(200).json({});
});

app.delete('/posts/:id', (req, res) => {
    ph.deletePost(req.params.id);

    res.status(200).json({
        code: 'ok',
        message: 'Пост успешно удален'
    });
});

app.put('/posts/:id', (req, res) => {    
    ph.updatePost({
        id: req.params.id,
        title: req.body.title,
        text: req.body.text,
        image: req.body.image,
    })

    res.status(200).json({
        code: 'ok',
        message: 'Пост успешно обновлен'
    });
});

app.listen(3000, () => {
    console.log(`Инициализация завершена.\nСервер запущен на порту 3000`);
});