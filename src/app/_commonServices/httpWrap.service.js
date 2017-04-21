/**
 * Created by Home on 1/27/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HttpWrap = HttpWrap_1 = (function () {
    function HttpWrap(http) {
        this.http = http;
        HttpWrap_1._headers.append('token', 'adminToken');
    }
    HttpWrap.prototype.get = function (url) {
        HttpWrap_1._options = new http_1.RequestOptions({ headers: HttpWrap_1._headers });
        return this.http.get(url, HttpWrap_1._options);
    };
    HttpWrap.prototype["delete"] = function (url) {
        HttpWrap_1._options = new http_1.RequestOptions({ headers: HttpWrap_1._headers });
        return this.http["delete"](url, HttpWrap_1._options);
    };
    HttpWrap.prototype.patch = function (url, body) {
        HttpWrap_1._options = new http_1.RequestOptions({ headers: HttpWrap_1._headers });
        return this.http.patch(url, body, HttpWrap_1._options);
    };
    HttpWrap.prototype.post = function (url, body) {
        HttpWrap_1._options = new http_1.RequestOptions({ headers: HttpWrap_1._headers });
        return this.http.post(url, body, HttpWrap_1._options);
    };
    HttpWrap.prototype.options = function (url) {
        HttpWrap_1._options = new http_1.RequestOptions({ headers: HttpWrap_1._headers });
        return this.http.options(url, HttpWrap_1._options);
    };
    HttpWrap.getHeaders = function () {
        return HttpWrap_1._headers;
    };
    return HttpWrap;
}());
HttpWrap._headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
HttpWrap._options = {};
HttpWrap = HttpWrap_1 = __decorate([
    core_1.Injectable()
], HttpWrap);
exports.HttpWrap = HttpWrap;
var HttpWrap_1;
