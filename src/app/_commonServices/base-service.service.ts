/**
 * Created by Home on 3/4/2017.
 */

import {HttpWrap} from "./httpWrap.service";
import {Response} from "@angular/http";
import {DataConverterService} from "../_commonServices/converter.service";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ServiceInfoProvider {
  private _serviceId: number;

  //for live http://pure-badlands-72083.herokuapp.com/
  private _serviceBaseUrl: string = "http://localhost:9011/";

  constructor(private  httpWrap: HttpWrap) {

  }

  public getDataAboutService(serviceId: number): Observable<string> {
    return this.httpWrap.get(this._serviceBaseUrl + 'serviceDetails/' + serviceId).map((response: Response) => response.text());
  }


}
