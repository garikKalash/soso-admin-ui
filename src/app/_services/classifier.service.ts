import {BaseService} from "../_commonServices/base-service.service";
import {Service} from "../_models/service.model";
import {HttpWrap} from "../_commonServices/httpWrap.service";
import {Response} from "@angular/http";
import {DataConverterService} from "../_commonServices/converter.service";
import {Injectable, OnInit, Inject} from "@angular/core";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
/**
 * Created by Home on 3/4/2017.
 */
@Injectable()
export class ClassifierService extends BaseService {
  constructor(private httpWrap: HttpWrap) {
    super(4);

  }

  getServices(): Observable<string> {
    return this.getHttp().get('http://localhost:8001/commonData/getSosoServices')
      .map((response: Response) => response.text());
  }

  addService(service:Service):Observable<string>{
    let data = JSON.stringify(service);
    return this.httpWrap.post('http://localhost:8001/commonData/createSosoService',data).map((response:Response) => response.text());

  }

  deleteService(service:Service):Observable<string>{
    return this.httpWrap.delete('http://localhost:8001/commonData/deleteSosoServices/'+service._id).map((resp:Response)=> resp.text());

  }

  getHttp(): HttpWrap {
    return this.httpWrap;
  }


}
