export class Employee {
  constructor(firstname: string, lastname: string, zipcode: string){
    this.firstname = firstname;
    this.lastname = lastname;
    this.zipcode = zipcode;
  }

  firstname: string;
  lastname: string;
  zipcode: string;
}
