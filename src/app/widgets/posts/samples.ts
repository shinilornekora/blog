type Post = {
    title: string;
    text: string;
    image: string;
}

/* Когда придет NGRX сделать прокинуть это как initialState. */
/* Наверное его уже стоит завозить, но мне хочется доделать статику */

const templatedText = (
    'long story long story long story long story long story long story long story' +
    'long story long story long story long story long story long story long story' +
    'long story long story long story long story long story long story long story'
);

export const postsSample: Array<Post> = [
    {
        title: 'Fate strikes!',
        text: templatedText,
        image: 'sword_1.png'
    },
    {
        title: 'Another fate strikes!',
        text: templatedText,
        image: 'sword_2.png'
    },
    {
        title: 'This fate is furious!',
        text: templatedText,
        image: 'sword_3.png'
    }
].map(post => ({ title: post.title, text: post.text, image: `/assets/static/${post.image}` }))