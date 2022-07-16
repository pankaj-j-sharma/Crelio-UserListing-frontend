import { Component, OnInit } from '@angular/core';
import { UserData,UserInfo,UserContact,UserLocation } from 'src/app/interfaces/user-data';
import { UserInfoData } from 'src/app/interfaces/user-info-data';
import { RestApiService } from 'src/app/services/rest-api/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  processing: boolean = false;
  userdatalist: UserInfoData[] = [];
  userdetaildata!: UserData ;
  pagenumber: number = 1;
  totalusers: number = 999;
  showUserList : boolean = true;  
  title : string = 'User List';
  searchParam : string ="";
  searched : boolean = false;

  constructor(private restAPIService: RestApiService) {}

  ngOnInit(): void {
    this.loadUserInfoList();
  }

  loadUserInfoList() {
    this.processing = true;
    this.restAPIService
      .getUserDataListFromAPI(this.pagenumber)
      .subscribe((resp) => {
        console.log('resp', resp);
        let results = resp.results;
        this.totalusers = resp["count"];
        this.userdatalist=[];
        for (let i = 0; i < results.length; i++) {
          this.userdatalist.push({
            No: i + 1,
            UserId: results[i].id,
            UserName: results[i].username,
            FirstName: results[i].info[0].first,
            LastName: results[i].info[0].last,
            Gender: results[i].info[0].gender,
            DoB: results[i].info[0].dob,
          });
        }
        this.processing = false;
      });
  }


  pageChangeEvent(event: number) {
    this.pagenumber = event;
    if(this.searched){
      this.searchUsersbyQuery()
    }else{
      this.loadUserInfoList();
    }
  }

  searchUsersbyQuery(){
    this.searched = true;
    this.processing = true;
    this.restAPIService
      .getUserDataListbySearchFromAPI(this.pagenumber,this.searchParam)
      .subscribe((resp) => {
        console.log('resp', resp);
        let results = resp.results;
        this.totalusers = resp["count"];
        this.userdatalist=[];
        for (let i = 0; i < results.length; i++) {
          this.userdatalist.push({
            No: i + 1,
            UserId: results[i].id,
            UserName: results[i].username,
            FirstName: results[i].info[0].first,
            LastName: results[i].info[0].last,
            Gender: results[i].info[0].gender,
            DoB: results[i].info[0].dob,
          });
        }
        this.processing = false;
        if (this.totalusers<=0){
          this.clearsearchByQuery();
        }
      });
  }

  clearsearchByQuery(){
    this.pagenumber=1;
    this.searched = false;
    this.searchParam="";
    this.loadUserInfoList();
  }

  viewUserDetails(id: string) {
    console.log('fetching user data', id);
    this.title = "User Details";
    this.loadUserDetailsData(id);
  }

  loadUserDetailsData(userid : string){
    this.processing = true;
    this.restAPIService
      .getUserDetailsDataFromAPI(userid)
      .subscribe((resp) => {
        console.log('resp', resp);
        this.userdetaildata = resp;
        this.processing = false;
        this.showUserList=false;

      });    
  }  
}
