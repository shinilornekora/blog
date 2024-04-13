import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './widgets/header/header';
import { Store, StoreModule } from '@ngrx/store';
import { PostStateModule } from './modules/post/store';
import { postReducer } from './modules/post/post.reducer';

/**
 * Как работает система компонентов
 * 
 * 1) selector: как этот компонент называть
 * 2) standalone: поддержка авто-импортов
 * 3) imports: компоненты которые буду использовать в шаблоне
 * 4) templateUrl: основной шаблон, который использует дочерние компоненты
 * 5) styleUrl: стилевая статика для пункта 4
 */

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [Store],
    imports: [
        RouterOutlet, 
        Header, 
    ],
    templateUrl: './root.html',
    styleUrl: './styles.css'
})
export class AppComponent {
    title = 'blog';
}
