import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { postReducer } from './post.reducer';

@NgModule({
    imports: [
        StoreModule.forRoot({ posts: postReducer }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false })
    ],
    declarations: [],
})
export class PostStateModule {
    title = 'store'
}
