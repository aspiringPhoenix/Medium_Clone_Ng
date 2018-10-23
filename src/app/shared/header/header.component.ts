import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService,JwtService } from '../../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  validator:boolean=false
  setValidator():void{
    if (this.jwtService.getToken()){
      this.validator=true;
    }
  }
  logOut():void{
    console.log("reached");
    this.jwtService.destroyToken();
    this.router.navigateByUrl('/');
    
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
    this.setValidator();
  }
}