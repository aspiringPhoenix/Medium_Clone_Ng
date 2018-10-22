import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { Article } from '../shared/models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  slug:string;
  article:Article;
  constructor(private route: ActivatedRoute,private apiService: ApiService) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.slug = data[data.length - 1].path;
    });
    this.apiService.get(`/articles/this.slug`)
      .subscribe(
        data => this.setArticle(data),
        err=>this.purgeArticle()
      );
  }
  purgeArticle():void{}
  setArticle(data:any){
    this.article=data.article;
    console.log(this.article);
  }

}
