/**
 * Created by Garegin.Kalashyan on 12/28/2016.
 */
import {AdminInterfaceComponent} from "./components/soso-admin-component/admin.component";
import {RouterModule, Routes} from "@angular/router";
import { ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: AdminInterfaceComponent,
  },


  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
