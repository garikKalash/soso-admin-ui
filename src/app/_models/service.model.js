"use strict";
exports.__esModule = true;
/**
 * Created by Home on 3/4/2017.
 */
var Service = (function () {
    function Service(id, servicename_eng, servicename_arm) {
        this._id = id;
        this._servicename_eng = servicename_eng;
        this._servicename_arm = servicename_arm;
    }
    Object.defineProperty(Service.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "servicename_eng", {
        get: function () {
            return this._servicename_eng;
        },
        set: function (value) {
            this._servicename_eng = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "servicename_arm", {
        get: function () {
            return this._servicename_arm;
        },
        set: function (value) {
            this._servicename_arm = value;
        },
        enumerable: true,
        configurable: true
    });
    return Service;
}());
exports.Service = Service;
