/**
 * Created by Home on 3/4/2017.
 */

import {HttpWrap} from "./httpWrap.service";
import {Response} from "@angular/http";
import {DataConverterService} from "../_commonServices/converter.service";
import 'rxjs/add/operator/map';


export class BaseService{
  private _serviceId:number;
  private _serviceUrl:string;
  private _serviceDetails:string;



  constructor(serviceId:number) {
    this._serviceId = serviceId;

  }

  getServiceDetails(baseServiceUri:string):void{
    this._serviceUrl = this.getDataConverterService().getServiceUrlFromJsonString(baseServiceUri);
  }

  init(): void {
     this.prepareServiceDetails();
  }

  prepareServiceDetails(): void {
      this.getServiceDetails(this.getDetailsServerUrl(this._serviceId));
  }

   private getDetailsServerUrl(...queryParams:Array<string|number>) : string {
    let basePath:string = "http://localhost:9011/serviceDetails";
    let url = basePath;
    for (let queryParam of queryParams) {
      url += "/" + queryParam;
    }
    return url;
  }

  getHttp():HttpWrap{
    return null;
  }

  getDataConverterService():DataConverterService{
    return null;
  }

  serviceId(): number {
    return this._serviceId;
  }

  serviceUrl(): string {
    return this._serviceUrl;
  }


}
