"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var base_service_service_1 = require("../_commonServices/base-service.service");
var converter_service_1 = require("../_commonServices/converter.service");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
/**
 * Created by Home on 3/4/2017.
 */
var ClassifierService = (function (_super) {
    __extends(ClassifierService, _super);
    function ClassifierService(httpWrap) {
        var _this = _super.call(this, 4) || this;
        _this.httpWrap = httpWrap;
        return _this;
    }
    ClassifierService.prototype.getServices = function () {
        this.httpWrap.get(this.serviceUrl() + '/commonData/getSosoServices')
            .map(function (response) { return response.text(); }).subscribe(function (responseJson) {
            return converter_service_1.DataConverterService.servicesFromJson(responseJson);
        });
        return [];
    };
    ClassifierService.prototype.getServiceDetails = function (baseServiceUri) {
        this.httpWrap.get(baseServiceUri).map(function (response) { return response.text(); }).subscribe(function (json) {
            return json;
        });
        return "";
    };
    return ClassifierService;
}(base_service_service_1.BaseService));
ClassifierService = __decorate([
    core_1.Injectable()
], ClassifierService);
exports.ClassifierService = ClassifierService;
