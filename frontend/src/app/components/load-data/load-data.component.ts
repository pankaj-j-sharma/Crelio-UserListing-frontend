import { Component, OnInit } from '@angular/core';
import { max } from 'rxjs';
import { RestApiService } from 'src/app/services/rest-api/rest-api.service';

@Component({
  selector: 'app-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.scss']
})
export class LoadDataComponent implements OnInit {

  processing: boolean = false;
  title : string = 'Load Data from External API';
  logoutput : string = "";
  formData = new FormData();
  numberofrecords : number=1;

  constructor(private restAPIService:RestApiService) { }

  ngOnInit(): void {
  }

  loadExternalData(){
    this.processing=true;
    this.formData = new FormData();
    this.logoutput="";
    if(this.numberofrecords>5000){
      this.logoutput+="Maximum of 5000 records can be added at a time.\n";
    }
    this.formData.append('records',this.numberofrecords.toString());
    this.restAPIService
      .loadDataFromExternalAPI(this.formData)
      .subscribe((resp) => {
        if (resp.status==200){
          this.logoutput+=resp.message+"\n";
          this.logoutput+="There are now " +resp.total_users.toString()+" users in our system";
        }
        this.processing=false;
      });

  }

}
