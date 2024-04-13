import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { PostService } from './post.service';
import * as PostActions from './post.actions';

@Injectable()
export class PostEffects {
    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(PostActions.loadPosts),
        mergeMap(() => this.postService.getPosts().pipe(
          	map(posts => PostActions.loadPostsSuccess({ posts }))
        ))
    ));

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) {}
}
