import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './routes';

/**
 * Похоже на простой глобальный контекст
 * Есть интересная идея скрестить это с DI-либой.
 */

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes)]
};
