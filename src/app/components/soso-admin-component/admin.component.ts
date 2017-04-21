/**
 * Created by Home on 3/19/2017.
 */
import {Component, OnInit} from "@angular/core";
import {Service} from "../../_models/service.model";
import {Client} from "../../_models/client.model";
import {Partner} from "../../_models/partner.model";
import {ClientService} from "../../_services/client.service";
import {PartnerService} from "../../_services/partner.service";
import {ClassifierService} from "../../_services/classifier.service";
import {DataConverterService} from "../../_commonServices/converter.service";
@Component({
  moduleId: module.id,
  templateUrl: './admin.component.html',
  selector: 'admin-interface',
  styleUrls: ['admin.component.css']
})
export class AdminInterfaceComponent implements OnInit {
  private services: Service[] = [];

  private _clients: Array<Client> = [];
  private partners: Partner[] = [];

  displayServiceAddDialog: boolean;

  service: Service = <Service>{};
  partner: Partner = <Partner>{};

  selectedService: Service;
  selectedPartner: Partner;

  newServiceAdding: boolean;



  private newService: Service = <Service>{};


  constructor(private  partnerService: PartnerService,
              private  classifierService: ClassifierService) {
  }


  ngOnInit(): void {
    this.partnerService.getPartners().subscribe((responseJson: string) => {
      this.partners = DataConverterService.partnersFromJson(responseJson);
    });

    this.classifierService.getServices().subscribe((responseJson: string) => {
      this.services = DataConverterService.servicesFromJson(responseJson);
    });

  }

  addNewService() {
    this.classifierService.addService(this.newService).subscribe((newService: string) => {
      this.newService = DataConverterService.getServiceFromJsonString(newService);
      this.services.push(this.newService);
      this.newService = <Service>{};
      this.closeAddServiceDialog();
    })

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

  deletePartner() {
    this.partnerService.deletePartner(this.selectedPartner).subscribe(
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

  onPartnerSelect(event:any){}

  cloneService(originService: Service): Service {
    let service = <Service>{};
    service._id = originService._id;
    service._serviceName_arm = originService._serviceName_arm;
    service._serviceName_eng = originService._serviceName_eng;
    return service;
  }

  findSelectedServiceIndex(): number {
    return this.services.indexOf(this.selectedService);
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
