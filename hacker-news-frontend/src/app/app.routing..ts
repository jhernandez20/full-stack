
import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';


export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', component: ArticleComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];


