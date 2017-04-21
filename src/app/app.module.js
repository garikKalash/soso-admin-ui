"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var admin_component_1 = require("./components/soso-admin-component/admin.component");
var app_routing_1 = require("./app.routing");
var primeng_1 = require("primeng/primeng");
var httpWrap_service_1 = require("./_commonServices/httpWrap.service");
var partner_service_1 = require("./_services/partner.service");
var classifier_service_1 = require("./_services/classifier.service");
var client_service_1 = require("./_services/client.service");
var authentication_service_1 = require("./_services/authentication.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            admin_component_1.AdminInterfaceComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            primeng_1.DataTableModule,
            primeng_1.SharedModule,
            primeng_1.TabViewModule
        ],
        providers: [
            httpWrap_service_1.HttpWrap,
            partner_service_1.PartnerService,
            classifier_service_1.ClassifierService,
            client_service_1.ClientService,
            authentication_service_1.AuthenticationService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
