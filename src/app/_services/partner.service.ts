import {ServiceInfoProvider} from "../_commonServices/base-service.service";
import {Partner} from "../_models/partner.model";
import {HttpWrap} from "../_commonServices/httpWrap.service";
import {Response} from "@angular/http";
import {DataConverterService} from "../_commonServices/converter.service";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

/**
 * Created by Home on 3/4/2017.
 */
@Injectable()
export class PartnerService{

    constructor(private httpWrap: HttpWrap) {


    }



    getPartners(): Observable<string> {
       return this.getHttp().get('http://localhost:8081/partner/getAllPartners')
            .map((response: Response) => response.text());
    }

    deletePartner(partner:Partner):Observable<string>{
      return this.getHttp().get('http://localhost:8081/partner/getAllPartners')
        .map((response: Response) => response.text());
    }

    getHttp():HttpWrap{
      return this.httpWrap;
    }







}
