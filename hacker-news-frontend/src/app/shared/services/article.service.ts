import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Article } from '../models/article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.getArticles.domain + environment.getArticles.path + environment.getArticles.base_path);
  }

  deleteArticle(article: Article) {
    return this.http.put<Article>(environment.deleteArticle.domain + environment.deleteArticle.path +
      environment.deleteArticle.base_path + article._id, article);
  }
}
