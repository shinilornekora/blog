import { PostServiceHandler } from './post/samples.js';
import express from 'express';
import cors from 'cors';


const app = express().use(express.json()).use(cors())

app.use(express.json());

const ph = new PostServiceHandler();

app.get('/posts', (req, res) => {
    const responseData = {
        data: ph.allPosts
    }

    console.log(`[DEBUG]: got request`)
    console.log(`[DEBUG]: responsing with following data:`)
    console.log(ph.allPosts)

    res.status(200).json(responseData);
})

app.post('/posts/add', (req, res) => {
    ph.addPost({
        id: req.params.id,
        title: req.params.title,
        text: req.params.text,
        image: req.params.image,
    })

    res.status(200);
})

app.delete('/posts/:id', (req, res) => {
    ph.deletePost(req.params.id);

    res.status(200);
})

app.put('/posts/update', (req, res) => {
    ph.updatePost({
        id: req.params.id,
        title: req.params.title,
        text: req.params.text,
        image: req.params.image,
    })

    res.status(200);
})

app.listen(3000, () => {
    console.log(`Инициализация завершена.\nСервер запущен на порту 3000`);
});