import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserLayoutRoutes } from "./user-layout.routing";


@NgModule({
  imports: [
    RouterModule.forChild(UserLayoutRoutes),
  ],
  exports:[RouterModule],
  declarations: [],
  providers:[
  ]
})
export class UserLayoutModule {}