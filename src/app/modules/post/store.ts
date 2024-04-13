import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
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
