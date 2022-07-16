import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/components/home/home.component";
import { LoadDataComponent } from "src/app/components/load-data/load-data.component";

export const UserLayoutRoutes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "load-data", component: LoadDataComponent },

]  