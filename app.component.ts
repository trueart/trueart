import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth/authentication.service';
import { User } from './auth/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  snavmenu:string;
  snavmenuCode:string;
  cour1:string;
  exos:string;  
  currentUser: User;
  mobileQuery: MediaQueryList;
  //fillerNav = Array.from({length: 4}, (_, i) => `Toiles 20 ${i + 1}`);
  fillerNav = ['Toiles 2018','Toiles 2009','Toiles 2008', 'Toiles 2007'];
  navrroutes = ['/','/login','/','/login', '/'];
  fillerContent = Array.from({length: 5}, () =>
      `Test sidenav`);
  private _mobileQueryListener: () => void;
  
  constructor(changeDetectorRef: ChangeDetectorRef, 
              media: MediaMatcher,
              private router: Router,
              private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        console.log('ici2=');
        
  }

  ngOnDestroy(): void {
    console.log('ici3=');
        this.mobileQuery.removeListener(this._mobileQueryListener);
        console.log('ici4=');
  }

  receiveMenu($event){
    this.snavmenu = $event;
    console.log('snavmenu=', this.snavmenu);
  }
  receiveMenuCode($event){
    this.snavmenuCode = $event;
    console.log('snavmenuCode=', this.snavmenuCode);
  }  


}

