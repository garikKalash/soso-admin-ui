import {Service} from "../_models/service.model";
import {Partner} from "../_models/partner.model";
import {Client} from "../_models/client.model";
import {Injectable} from "@angular/core";
import {HttpWrap} from "./httpWrap.service";
import {Response, Http, RequestOptions} from "@angular/http";
import {jsonpFactory} from "@angular/http/src/http_module";
/**
 * Created by Garik Kalashyan on 3/4/2017.
 */


export class DataConverterService {
  constructor() {
  }

  public static getTokenFromJsonString(jsonString: string): string {
    return <string>JSON.parse(jsonString)["token"];
  }

  public getServiceUrlFromJsonString(serviceUrl: string): string {
    return <string>(JSON.parse(serviceUrl)["serviceDetail"]["url"]);
  }

  public static getServiceFromJsonString(serviceJson: string): Service {
    return <Service>(JSON.parse(serviceJson)["service"]);
  }

  public static getServiceIdfromJson(serviceJson:string):number{
    return JSON.parse(serviceJson)["service"].id;
  }
  public static getServiceUrlfromJson(serviceJson:string):string{
    return JSON.parse(serviceJson)["service"].url;
  }

  public static servicesFromJson(responseJson: string):Service[] {
    let serviceList: Service[] = [];
    JSON.parse(responseJson)["sosoServices"].forEach((node: any) => {
      serviceList.push(new Service(node.id,
        node.serviceName_eng, node.serviceName_arm,node.imgpath,node.parentid));
    });
    return serviceList;
  }

  public static partnersFromJson(responseJson: string): Array<Partner> {
    let partners: Array<Partner> = [];
    JSON.parse(responseJson)["partners"].forEach((node: any) => {
      partners.push(new Partner(node.id,
        node.partner_name,
        node.telephone,
        node.serviceName,
        node.partner_username,
        null));
    });
    return partners;
  }

  public static clientsFromJson(responseJson: string): Array<Client> {
    let clients: Array<Client> = [];
    JSON.parse(responseJson)["clients"].forEach((node: any) => {
      clients.push(new Client());
    });
    return clients;
  }

}
