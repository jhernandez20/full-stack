import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/services/article.service';
import { Article } from '../shared/models/article.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: Article[];
  hoverIndex: string;
  isCompleted: boolean = true;

  constructor(private articleService: ArticleService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  deleteArticle(article: any) {
    this.articleService.deleteArticle(article).subscribe((response: any) => {
      this.isCompleted = false;
      this.getAllArticles();
      this.openSnackBar(response.message, 'OK');
    }, (err) => {
      this.openSnackBar(err.message, 'OK');
      this.isCompleted = false;
    });
  }

  getAllArticles() {
    this.articleService.getArticles().subscribe((response: any) => {
      this.articles = response.articles;
      this.isCompleted = false;
    }, err => {
      this.openSnackBar(err.message, 'OK');
      this.isCompleted = false;
    });
  }

  enter(index) {
    this.hoverIndex = index;
  }

  leave(index) {
    this.hoverIndex = null;
  }

  openlink(url: any) {
    window.open(url, '_blank');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
