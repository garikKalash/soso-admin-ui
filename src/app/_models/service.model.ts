/**
 * Created by Home on 3/4/2017.
 */
export class Service {
  private id: number;
  private serviceName_eng: string;
  private serviceName_arm: string;
  private imgpath: string;
  public parentid: number;


  constructor(id: number, servicename_eng: string, servicename_arm: string, imgpath: string, parentid: number) {
    this.id = id;
    this.serviceName_eng = servicename_eng;
    this.serviceName_arm = servicename_arm;
    this.imgpath = imgpath;
    this.parentid = parentid;
  }

  get _id(): number {
    return this.id;
  }

  set _id(value: number) {
    this.id = value;
  }


  get _serviceName_eng(): string {
    return this.serviceName_eng;
  }

  set _serviceName_eng(value: string) {
    this.serviceName_eng = value;
  }

  get _serviceName_arm(): string {
    return this.serviceName_arm;
  }

  set _serviceName_arm(value: string) {
    this.serviceName_arm = value;
  }


  get _imgpath(): string {
    return this.imgpath;
  }

  set _imgpath(value: string) {
    this.imgpath = value;
  }


}
