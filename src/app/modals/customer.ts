export class Customer {
  customernumber: string;
  first_name: string;
  last_name: string;
  street: string;
  zip: string;
  city: string;
  email: string;

  constructor(customernumber: string, first_name: string, last_name: string, street: string, zip: string, city: string, email: string) {
    this.customernumber = customernumber;
    this.first_name = first_name;
    this.last_name = last_name;
    this.street = street;
    this.zip = zip;
    this.city = city;
    this.email = email;
  }
}
