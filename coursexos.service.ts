import { Injectable } from '@angular/core';
import { exocours} from "./training/exocours.model";
import { Icoursexos } from './training/coursexos.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './auth/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})

export class CoursexosService {
  //fake jason
  private _url:string = "/assets/coursexos.json";
  private _turl:string = "/assets/tcoursexos.json";

  // population sidenav depending on authorisations - rg 1
  private sidenavSource = new BehaviorSubject<[string]>(["Menu vide"]);
  currentSidenavValue = this.sidenavSource.asObservable();

  private sidenavCodeSource = new BehaviorSubject<[string]>(["0"]);
  currentSidenavCodeValue = this.sidenavCodeSource.asObservable();



  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {  }

 


  //rg 1 
  changeSidenav(menu: [string], menuCode:[string]) {
    this.sidenavSource.next(menu);
    this.sidenavCodeSource.next(menuCode);
    console.log('menu=', menu);
    console.log('menuCode=', menuCode);
  }


  //fake jason
  getcoursexos1(){
    return this.http.get<Icoursexos[]>(this._turl)
  }
  getcoursexos(){
    return this.http.get(this._url)
  }
      //from json fake server



 //fake jason
  private exocoursdisponible: exocours[] = [
    {id: "Chap1", url: 'PzRXF6qGrGQ'},
    {id: "Chap2", url: 'a7HbzDMQzvU'}
  ]; 

  getCrsexo() {
    return [{... this.exocoursdisponible}];
  }
  getCrsexodispo() {
    return this.exocoursdisponible.slice();
  }

  getSelectedexocours(selectedId:string) {
    const selectedExocours = this.exocoursdisponible.find( ecdispo => ecdispo.id === selectedId );
    return selectedExocours;
    alert(selectedId);
    //this.exocourschanged.next({ ... selectedExocours});
  }


  // ici c pas fake
  getcours(role: number) {
    console.log('appelgetcours1=');
    const tokenid = this.getToken();
    console.log('appelgetcours2=', tokenid);
    if (tokenid){
     
      const headers = new HttpHeaders({'token': tokenid});
      return this.http.get<any>(`http://localhost:3000/SidenavCours`,  {headers: headers})
      .subscribe(response => {//console.log('responseside=',response);
                              let data : [string]; let dataCode : [string];
                              data = [""]; dataCode = [""];
                              //console.log('Object.keys(response)=',Object.keys(response));
                              for (let i of Object.keys(response)) {
                                //console.log('response[i].side_chapitre=',response[i].side_chapitre);
                                //console.log('response[i].side_chapitre_code=',response[i].side_chapitre_code);
                                data[i] = response[i].side_chapitre;
                                dataCode[i] = response[i].side_chapitre_code;
                              }
                              //console.log('data=',data);
                              // rg 1 - 2
                              this.changeSidenav(data, dataCode);
                             })
    }
  }

  getDropDownCours(codeChapitre:string) {
    console.log('appelgetcours1=');
    const tokenid = this.getToken();
    console.log('appelgetcours2=', tokenid);
    if (tokenid){    
        const headers = new HttpHeaders({'token': tokenid});
        let params = new HttpParams().set("page",codeChapitre)
        return this.http.get<any>(`http://localhost:3000/DropDownCours`,  {headers: headers, params: params} );
      
  }
  }

  getToken() {
    let jwtHelper = new JwtHelperService();
    let cU = localStorage.getItem('currentUser');
    if (cU){
        let tokenId = JSON.parse(cU).token;
        //console.log("tokenid=", tokenId);
        if (!tokenId) {
            return false;
        } else {
            let isExpired = jwtHelper.isTokenExpired(tokenId);
            if (isExpired) {
                return false;
            } else {
                return tokenId;
            }
        }
    } else {
        return false;
    }
}    
}
