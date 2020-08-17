import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing.';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormatDatePipe } from './shared/pipes/format-date.pipe';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HeaderComponent,
    FormatDatePipe,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
