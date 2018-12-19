import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  mobileQuery: MediaQueryList;
  //fillerNav = Array.from({length: 4}, (_, i) => `Toiles 20 ${i + 1}`);
  fillerNav = ['Toiles 2018','Toiles 2009','Toiles 2008', 'Toiles 2007'];
  navrroutes = ['/','/login','/','/login', '/'];
  fillerContent = Array.from({length: 5}, () =>
      `Test sidenav`);
  private _mobileQueryListener: () => void;
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}

