import { Routes } from '@angular/router';
import { Posts } from './widgets/posts/posts';
import { PostCreate } from './widgets/form/form';
import { Preview } from './widgets/preview/preview';

export const routes: Routes = [
    {
        path: '',
        component: Posts,
    },
    {
        path: 'preview',
        component: Preview,
    },
    {
        path: 'write',
        component: PostCreate,
    },
];
