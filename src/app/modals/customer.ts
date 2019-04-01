export class Customer {

  business: boolean;
  code: number;
  contractAddress: string;
  customerState: string;
  debitorName: string;
  debitorNo: string;
  hitCount: number;
  id: number;
  invoiceAddress: string;
  notifiable: boolean;
  prioNo: number;
  ruzu: boolean;
  stoerungId: number;
  verifiedEMail: string;
  verifiedPhone: string;
  vip: boolean;


  constructor(business: boolean, code: number, contractAddress: string, customerState: string, debitorName: string, debitorNo: string, hitCount: number, id: number, invoiceAddress: string, notifiable: boolean, prioNo: number, ruzu: boolean, stoerungId: number, verifiedEMail: string, verifiedPhone: string, vip: boolean) {
    this.business = business;
    this.code = code;
    this.contractAddress = contractAddress;
    this.customerState = customerState;
    this.debitorName = debitorName;
    this.debitorNo = debitorNo;
    this.hitCount = hitCount;
    this.id = id;
    this.invoiceAddress = invoiceAddress;
    this.notifiable = notifiable;
    this.prioNo = prioNo;
    this.ruzu = ruzu;
    this.stoerungId = stoerungId;
    this.verifiedEMail = verifiedEMail;
    this.verifiedPhone = verifiedPhone;
    this.vip = vip;
  }
}
