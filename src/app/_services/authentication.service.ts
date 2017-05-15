import {ServiceInfoProvider} from "../_commonServices/base-service.service";
import {HttpWrap} from "../_commonServices/httpWrap.service";
import {Injectable} from "@angular/core";
import {DataConverterService} from "../_commonServices/converter.service";
/**
 * Created by Home on 3/19/2017.
 */

@Injectable()
export class AuthenticationService{
  constructor(private dataConverterService: DataConverterService,private httpWrap:HttpWrap){

  }


  getHttp():HttpWrap{
    return this.httpWrap;
  }




}
