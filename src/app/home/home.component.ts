import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Article } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles:Array<Article>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
      this.apiService.get('/articles')
      .subscribe(
        data => this.setArticle(data),
        err=>this.purgeArticle()
      );
  }
  purgeArticle():void{}
  setArticle(data:any){
    this.articles=data.articles;
  }

}
