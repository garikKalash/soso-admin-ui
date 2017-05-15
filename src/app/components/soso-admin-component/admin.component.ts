/**
 * Created by Home on 3/19/2017.
 */
import {Component, OnInit, SecurityContext, Sanitizer} from "@angular/core";
import {Service} from "../../_models/service.model";
import {Client} from "../../_models/client.model";
import {Partner} from "../../_models/partner.model";
import {ClassifierService} from "../../_services/classifier.service";
import {DataConverterService} from "../../_commonServices/converter.service";
import {FileUploader} from "ng2-file-upload";
import {Headers} from "@angular/http";
import {SelectItem} from "primeng/components/common/api";
import {ServiceUrlProvider} from "../../_commonServices/mode-resolver.service";


@Component({
  moduleId: module.id,
  templateUrl: './admin.component.html',
  selector: 'admin-interface',
  styleUrls: ['admin.component.css']
})
export class AdminInterfaceComponent implements OnInit {
  private services: Service[] = [];
  private _servicesAsSelectItems: SelectItem[] = [];
  private serviceImageUploader: FileUploader;

  private _clients: Array<Client> = [];

  displayServiceAddDialog: boolean;

  service: Service = <Service>{};

  selectedService: Service;

  newServiceAdding: boolean;


  private newService: Service = <Service>{};


  constructor(private sanitizer: Sanitizer,
              private  classifierService: ClassifierService) {
  }


  ngOnInit(): void {
    this.classifierService.getServices().subscribe((responseJson: string) => {
      this.services = DataConverterService.servicesFromJson(responseJson);
      this.initFileUploader();
    });

  }

  private initFileUploader(): void {
    this.serviceImageUploader = new FileUploader({
      url: this.classifierService.getMyUrl() + "commonData/uploadserviceimage",
    });
    this.serviceImageUploader.onCompleteAll = () => {
      this.setServiceLogo(this.newService);
      this.newService = <Service>{};
      this.closeAddServiceDialog();
    };
    this.serviceImageUploader.onAfterAddingFile = () => {

    };
  }

  uploadNewPhoto(serviceId: number): void {
    this.serviceImageUploader.setOptions(
      {
        additionalParameter: {"id": serviceId}
      }
    );
    for (let item of this.serviceImageUploader.queue) {
      item.headers = new Headers({"Content-Type": "multipart/form-data"});
      item.upload();
    }

  }


  setServiceLogo(service:Service): void {
    if(service._id !== undefined && service._id !== null){
    this.classifierService.getServiceById(service._id)
      .subscribe(data => {
        this.selectedService = data;
      });
      }

  }

  safeImage(imgBase64: number) {
    if (imgBase64 === undefined || imgBase64 === null) {
      return this.sanitizer.sanitize(SecurityContext.URL, `http://phylo.cs.mcgill.ca/assets/img/loading.gif`);
    }
    return this.sanitizer.sanitize(SecurityContext.URL, `${ServiceUrlProvider.getCommonDataServiceUrl() + 'commonData/servicephoto/'+imgBase64}`);
  }


  addNewService() {
    if(!this.newService.parentid){
      this.newService.parentid = -1;
    }

    this.classifierService.addService(this.newService).subscribe((newService: string) => {
      this.newService = DataConverterService.getServiceFromJsonString(newService);
      this.services.push(this.newService);
      if (this.serviceImageUploader.queue.length != 0) {
        this.uploadNewPhoto(DataConverterService.getServiceIdfromJson(newService));
      } else {
        this.newService = <Service>{};
        this.closeAddServiceDialog();
      }
    });

  }

  closeAddServiceDialog(): void {
    this.newServiceAdding = false;
    this.selectedService = null;
    this.displayServiceAddDialog = false;
  }

  showDialogToAdd() {
    this.newServiceAdding = true;
    this.newService = <Service>{};
    this.selectedService = null;
    this.displayServiceAddDialog = true;
    this._servicesAsSelectItems = [];
    this._servicesAsSelectItems.push({label: '-- Choose service --', value: null});
    this.selectedService = this._servicesAsSelectItems[0].value;
    for (let service of this.services) {
      this._servicesAsSelectItems.push({label: service._serviceName_arm, value: service._id});
    }
  }


  deleteService() {
    this.classifierService.deleteService(this.newService).subscribe(
      data => {
        this.services.splice(this.findNewServiceIndex(), 1);
        this.service = <Service>{};
        this.newService = <Service>{};
        this.closeAddServiceDialog();
      }
    );
  }


  onRowSelect(event: any) {
    this.newServiceAdding = false;
    this.newService = <Service>(event.data);
    this.displayServiceAddDialog = true;
  }

  findNewServiceIndex(): number {
    return this.services.indexOf(this.newService);
  }


  get clients(): Array<Client> {
    return this._clients;
  }

  set clients(value: Array<Client>) {
    this._clients = value;
  }


}
