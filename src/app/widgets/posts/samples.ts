/* Когда придет NGRX сделать прокинуть это как initialState. */
/* Наверное его уже стоит завозить, но мне хочется доделать статику */

/**
 * Пришел NGRX, и по факту этот компонент нам больше не нужен.
 * TODO: перевезти его на сервер и отдавать как initialState.
 */

import { Post } from "../../types";

const templatedText = (
    'long story long story long story long story long story long story long story' +
    'long story long story long story long story long story long story long story' +
    'long story long story long story long story long story long story long story'
);

export const postsSample: Array<Post> = [
    {
        title: 'Fate strikes!',
        image: 'sword_1.png'
    },
    {
        title: 'Another fate strikes!',
        image: 'sword_2.png'
    },
    {
        title: 'This fate is furious!',
        image: 'sword_3.png'
    }
].map(post => ({ title: post.title, text: templatedText, image: `/assets/static/${post.image}` }))