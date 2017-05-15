import {Service} from "../_models/service.model";
import {HttpWrap} from "../_commonServices/httpWrap.service";
import {Response} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {DataConverterService} from "../_commonServices/converter.service";
import {ServiceUrlProvider} from "../_commonServices/mode-resolver.service";
/**
 * Created by Home on 3/4/2017.
 */
@Injectable()
export class ClassifierService {
  private myUrl: string = ServiceUrlProvider.getCommonDataServiceUrl();

  constructor(private httpWrap: HttpWrap) {


  }

  getServices(): Observable<string> {

    return this.getHttp().get(this.myUrl + 'commonData/appsososervices')
      .map((response: Response) => response.text());


  }


  addService(service: Service): Observable<string> {
    if (service.parentid === undefined || service.parentid === null) {
      service.parentid = -1;
    }
    let data = JSON.stringify(service);


        return this.httpWrap.post(this.myUrl + 'commonData/createSosoService', data).map((response: Response) => response.text());

  }

  getServiceById(id: number): Observable<Service> {
          return this.httpWrap.get(this.myUrl + 'commonData/service/' + id).map(response => response.json());


  }

  deleteService(service: Service): Observable<string> {
    return this.httpWrap.delete(this.myUrl + 'commonData/deleteSosoServices/' + service._id).map((resp: Response) => resp.text());

  }

  getHttp(): HttpWrap {
    return this.httpWrap;
  }

  public getMyUrl(): string {
    return this.myUrl;
  }


}
