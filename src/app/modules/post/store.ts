import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostEffects } from './post.effects';

@NgModule({
    imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([PostEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false })
    ],
    declarations: [],
    providers: []
})
export class _StoreModule {
    title = 'store'
}
