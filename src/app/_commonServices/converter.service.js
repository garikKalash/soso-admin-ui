"use strict";
exports.__esModule = true;
var service_model_1 = require("../_models/service.model");
var partner_model_1 = require("../_models/partner.model");
var client_model_1 = require("../_models/client.model");
/**
 * Created by Garik Kalashyan on 3/4/2017.
 */
var DataConverterService = (function () {
    function DataConverterService() {
    }
    DataConverterService.getTokenFromJsonString = function (jsonString) {
        return JSON.parse(jsonString)["token"];
    };
    DataConverterService.getServiceUrlFromJsonString = function (jsonString) {
        return JSON.parse(jsonString)["serviceDetail"]["url"];
    };
    DataConverterService.servicesFromJson = function (responseJson) {
        var serviceList = [];
        JSON.parse(responseJson)["getSosoServices"].forEach(function (node) {
            serviceList.push(new service_model_1.Service(node.id, node.servicename_eng, node.servicename_arm));
        });
        return serviceList;
    };
    DataConverterService.partnersFromJson = function (responseJson) {
        var partners = [];
        JSON.parse(responseJson)["partners"].forEach(function (node) {
            partners.push(new partner_model_1.Partner(node.id, node.partner_name, node.telephone, node.serviceName, node.partner_username, null));
        });
        return partners;
    };
    DataConverterService.clientsFromJson = function (responseJson) {
        var clients = [];
        JSON.parse(responseJson)["clients"].forEach(function (node) {
            clients.push(new client_model_1.Client());
        });
        return clients;
    };
    return DataConverterService;
}());
exports.DataConverterService = DataConverterService;
