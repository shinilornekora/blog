import { createReducer, on } from '@ngrx/store';
import { Post } from '../../types';

import * as PostActions from './post.actions';

export interface PostState {
    posts: Post[];
}

export const initialState: PostState = {
    posts: []
};

export const postReducer = createReducer(
    initialState,
    on(PostActions.loadPosts, state => state),
    on(PostActions.addPost, (state, { post }) => ({
        ...state,
        posts: [...state.posts, post]
    })),
    on(PostActions.deletePost, (state, { postId: title }) => ({
        ...state,
        posts: state.posts.filter(post => post.title !== title)
    }))
);
