import {BaseService} from "../_commonServices/base-service.service";
import {HttpWrap} from "../_commonServices/httpWrap.service";
import {Injectable} from "@angular/core";
import {DataConverterService} from "../_commonServices/converter.service";
/**
 * Created by Home on 3/19/2017.
 */

@Injectable()
export class AuthenticationService extends BaseService{
  constructor(private dataConverterService: DataConverterService,private httpWrap:HttpWrap){
        super(3);
  }


  getHttp():HttpWrap{
    return this.httpWrap;
  }




}
