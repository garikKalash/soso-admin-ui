import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AdminInterfaceComponent} from "./components/soso-admin-component/admin.component";
import {routing} from "./app.routing";
import {DataTableModule,SharedModule,TabViewModule} from 'primeng/primeng';
import {HttpWrap} from "./_commonServices/httpWrap.service";
import {PartnerService} from "./_services/partner.service";
import {ClassifierService} from "./_services/classifier.service";
import {ClientService} from "./_services/client.service";
import {AuthenticationService} from "./_services/authentication.service";
import {DataConverterService} from "./_commonServices/converter.service";
import {ButtonModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {FileSelectDirective} from "ng2-file-upload";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {ServiceInfoProvider} from "./_commonServices/base-service.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminInterfaceComponent,
    FileSelectDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DataTableModule,
    SharedModule,
    DropdownModule,
    TabViewModule,
    ButtonModule,
    AutoCompleteModule,
    DialogModule
  ],
  providers: [
    HttpWrap,
    PartnerService,
    ClassifierService,
    ClientService,
    AuthenticationService,
    ServiceInfoProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
