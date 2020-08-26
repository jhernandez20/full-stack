
import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { UserCreateComponent } from './users/user-create/user-create.component';


export const AppRoutes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'article', pathMatch: 'full', component: ArticleComponent },
  { path: 'register', pathMatch: 'full', component: UserCreateComponent },
  { path: 'res',   redirectTo: '/superusers', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];


