import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder

  ) { }

  ngOnInit() {
    this.articleForm = this.fb.group({
      'title': [''],
      'description': [''],
      'body': [''],
      'taglist': ['']
    });
  }
  createArticle(): void {
    let taglist = this.articleForm.value.taglist.split(' ');
    let article = {
      article: {
        title: this.articleForm.value.title,
        description: this.articleForm.value.description,
        body: this.articleForm.value.body,
        taglist: taglist
      }
    }
    this.router.navigateByUrl('/');
  }

}
