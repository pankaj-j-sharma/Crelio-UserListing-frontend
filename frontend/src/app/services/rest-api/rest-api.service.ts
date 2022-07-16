import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private BASE_URL = "http://127.0.0.1:8000/api/";
  private userLoginUrl = this.BASE_URL.replace("api","token");
  private userDataUrl = this.BASE_URL+"userdata";
  
  private userInfoListDataUrl = this.BASE_URL+"";
  private userInfoListBySearchDataUrl = this.BASE_URL+"search/";
  private userDetailsDataUrl = this.BASE_URL+"detail/";
  private loadDataFromExternalAPIUrl = this.BASE_URL+"loaddata/";
  
  private generateUserApiKeyDataUrl = this.BASE_URL+"generateapikey";
  private refreshUserDataUrl = this.BASE_URL+"refreshuserdata";

  httpOptions = {
    headers: new HttpHeaders({
      //'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin':'*',      
  })
  };  
  
  constructor(private http: HttpClient) { }

  generateHTTPOptions(){
    return { headers : new HttpHeaders({
      'Authorization':this.getItemFromStorage('currentuser') || ''
    })}
  }

  getUserDataListFromAPI(page: number){
    return this.http.get<any>(this.userInfoListDataUrl+'?page='+page , this.generateHTTPOptions());  
  }

  getUserDataListbySearchFromAPI(page : number , query : string){
    return this.http.get<any>(this.userInfoListBySearchDataUrl+'?page='+page+'&search='+query , this.generateHTTPOptions());  
  }

  getUserDetailsDataFromAPI(userid:string){
    return this.http.get<any>(this.userDetailsDataUrl+userid , this.generateHTTPOptions());  
  }

  hasLoginToken():Boolean{
    return localStorage.getItem('currentuser') ? true : false;
  }

  saveLoginToken(data:any){
    localStorage.clear();
      console.log('local storage',localStorage);
      localStorage.setItem('currentuser' ,'token '+data );
  }

  validateUserLogin(postData:any) :Observable<any>{
    return this.http.post<any>(this.userLoginUrl,postData , this.httpOptions);        
  }

  loadDataFromExternalAPI(postData:any){
    return this.http.post<any>(this.loadDataFromExternalAPIUrl,postData , this.generateHTTPOptions());        
  }

  generateUserApiKey(postData:any){
    return this.http.post<any>(this.generateUserApiKeyDataUrl,postData , this.httpOptions);        
  }

  getUserDataFromAPI(postData:any){
    return this.http.post<any>(this.userDataUrl,postData , this.httpOptions);        
  }

  refreshUserDataFromAPI(){
    return this.http.get<any>(this.refreshUserDataUrl , this.httpOptions);  
  }

  // to be modified
  getCurrentUserId(){
    return localStorage.getItem('id') ? localStorage.getItem('id') :'-1' ;
  }  

  saveItemToStorage(key:any,val:any){
    localStorage.setItem(key,val);
  }

  getItemFromStorage(key:any){
    return localStorage.getItem(key);
  }
  
  getCurrentUserData(){
    return JSON.parse(localStorage.getItem('userdata')||"{}") ;
  }

  
}
