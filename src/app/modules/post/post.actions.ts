import { createAction, props } from '@ngrx/store';
import { Post } from '../../types';

export const loadPosts = createAction('[Posts] Load Posts');
export const addPost = createAction('[Posts] Add Post', props<{ post: Post }>());
export const deletePost = createAction('[Posts] Delete Post', props<{ postId: string }>());

export function loadPostsSuccess(arg0: { posts: Post[]; }): any {
    return console.log('posts uploaded')
}

