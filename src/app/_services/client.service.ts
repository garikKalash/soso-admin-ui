import {ServiceInfoProvider} from "../_commonServices/base-service.service";
import {Client} from "../_models/client.model";
import {HttpWrap} from "../_commonServices/httpWrap.service";
import {Injectable} from "@angular/core";
import {DataConverterService} from "../_commonServices/converter.service";
import 'rxjs/add/operator/map';

/**
 * Created by Home on 3/19/2017.
 */
@Injectable()
export class ClientService{
    constructor(private dataConverterService: DataConverterService,private httpWrap: HttpWrap) {


    }
    getClients(): Array<Client> {
        return [];
    }

  getHttp():HttpWrap{
    return this.httpWrap;
  }







}
