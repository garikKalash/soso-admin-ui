"use strict";
exports.__esModule = true;
/**
 * Created by Garegin.Kalashyan on 12/28/2016.
 */
var admin_component_1 = require("./components/soso-admin-component/admin.component");
var router_1 = require("@angular/router");
var appRoutes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: admin_component_1.AdminInterfaceComponent
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
