const PostServiceHandler = require('./post/samples.js');

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express().use(express.json()).use(cors()).use(bodyParser.urlencoded({ extended: true })).use(express.json());
const upload = multer();

const ph = new PostServiceHandler();

app.get('/posts', (req, res) => {
    const responseData = {
        data: ph.allPosts
    }

    res.status(200).json(responseData);
});

app.post('/upload', upload.none(), (req, res) => {
    console.log(req.body);

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

    res.status(200);
});

app.put('/posts/update', (req, res) => {
    ph.updatePost({
        id: req.params.id,
        title: req.params.title,
        text: req.params.text,
        image: req.params.image,
    })

    res.status(200);
});

app.listen(3000, () => {
    console.log(`Инициализация завершена.\nСервер запущен на порту 3000`);
});