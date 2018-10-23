import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Article } from '../shared/models';

@Component({
  selector: 'app-yourfeed',
  templateUrl: './yourfeed.component.html',
  styleUrls: ['./yourfeed.component.css']
})
export class YourfeedComponent implements OnInit {
  articles:Array<Article>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('/articles/feed')
      .subscribe(
        data => {this.setArticle(data);
        console.log(data);
        },
        err=>this.purgeArticle()
      );
  }
  purgeArticle():void{}
  setArticle(data:any){
    this.articles=data.articles;
  }


}
