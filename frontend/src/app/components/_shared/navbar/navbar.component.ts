import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api/rest-api.service';

declare var $: any;

export interface NavSideBarItem{
  title:string
  description:string
  iconClass:string
  url:string
  roles:string[]
  subItems:NavSideBarItem[]
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,AfterViewInit {

  navSideBarItems:NavSideBarItem[]=[];
  tmpData= {} // need to decide on the data to pass
  currentUserRole="";
  userFirstName:string="";
  userOrganisation:string="";
  connectIndicator:string = "text-muted";
  formData = new FormData();

  userProfileImg = "../../../assets/images/common/default-profile-picture.png";
  userId:any = this.restApiService.getCurrentUserId();

  constructor(
    private router: Router,
    private restApiService: RestApiService
  ) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.restApiService.saveItemToStorage('current',window.location.pathname);
    this.tmpData = {'UserId':this.restApiService.getCurrentUserId()};
    this.loadUserProfile();
  }

  loadUserProfile(){
    this.navSideBarItems=[
      {
        title:'Home',
        description:'',
        iconClass:'fa fa-fw bg-home',
        url:'/home',
        roles:[],
        subItems:[]
      },
      {
        title:'Load Data',
        description:'',
        iconClass:'bg-detail fa fa-fw fa-user',
        url:'/load-data',
        roles:[],
        subItems:[]
      }  
    ]
  }


  showUserProfile(){
    // to be implemented
  }

  logoutUser(){
    localStorage.removeItem('currentuser');
    this.router.navigate(['login']);
  }

}
