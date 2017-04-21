/**
 * Created by Home on 3/4/2017.
 */
"use strict";
exports.__esModule = true;
var converter_service_1 = require("./converter.service");
require("rxjs/add/operator/map");
var BaseService = (function () {
    function BaseService(serviceId) {
        this._serviceId = serviceId;
        this.prepareServiceDetails();
    }
    BaseService.prototype.ngOnInit = function () {
    };
    BaseService.prototype.prepareServiceDetails = function () {
        this._serviceDetails = this.getServiceDetails(this.getDetailsServerUrl(this._serviceId));
        this._serviceUrl = converter_service_1.DataConverterService.getServiceUrlFromJsonString(this._serviceDetails);
    };
    BaseService.prototype.getDetailsServerUrl = function () {
        var queryParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            queryParams[_i] = arguments[_i];
        }
        var basePath = "http://localhost:9011/serviceDetails";
        var url = basePath;
        for (var _a = 0, queryParams_1 = queryParams; _a < queryParams_1.length; _a++) {
            var queryParam = queryParams_1[_a];
            url += "/" + queryParam;
        }
        return url;
    };
    BaseService.prototype.getServiceDetails = function (baseServiceUri) {
        return "";
    };
    BaseService.prototype.serviceId = function () {
        return this._serviceId;
    };
    BaseService.prototype.serviceUrl = function () {
        return this._serviceUrl;
    };
    return BaseService;
}());
exports.BaseService = BaseService;
