import { Component } from '@angular/core';

import { PostStateModule } from './modules/post/store';
import { HttpClientModule } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { RouterOutlet } from '@angular/router';
import { Header } from './widgets/header/header';

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
        PostStateModule,
        HttpClientModule,
    ],
    templateUrl: './root.html',
    styleUrl: './styles.css'
})
export class AppComponent {
    title = 'blog';
}
