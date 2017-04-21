"use strict";
exports.__esModule = true;
/**
 * Created by Home on 3/4/2017.
 */
var Partner = (function () {
    function Partner(id, partner_number, telephone, serviceName, partner_username, partner_password) {
        this._id = id;
        this._partner_name = partner_number;
        this._telephone = telephone;
        this._serviceName = serviceName;
        this._partner_username = partner_username;
        this._partner_password = partner_password;
    }
    Object.defineProperty(Partner.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Partner.prototype, "partner_name", {
        get: function () {
            return this._partner_name;
        },
        set: function (value) {
            this._partner_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Partner.prototype, "telephone", {
        get: function () {
            return this._telephone;
        },
        set: function (value) {
            this._telephone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Partner.prototype, "serviceName", {
        get: function () {
            return this._serviceName;
        },
        set: function (value) {
            this._serviceName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Partner.prototype, "partner_username", {
        get: function () {
            return this._partner_username;
        },
        set: function (value) {
            this._partner_username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Partner.prototype, "partner_password", {
        get: function () {
            return this._partner_password;
        },
        set: function (value) {
            this._partner_password = value;
        },
        enumerable: true,
        configurable: true
    });
    return Partner;
}());
exports.Partner = Partner;
