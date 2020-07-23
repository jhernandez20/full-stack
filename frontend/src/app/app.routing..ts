
import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', component: ArticleComponent },
  { path: '**', component: PageNotFoundComponent }
];


