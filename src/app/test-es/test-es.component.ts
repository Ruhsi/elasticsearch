import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ElasticsearchService} from "../elasticsearch.service";
import {Customer} from "../modals/customer";
import {CustomerGroup} from "../modals/customerGroup";
import {Configuration} from "../configuration/configuration";


@Component({
  selector: 'app-test-es',
  templateUrl: './test-es.component.html',
  styleUrls: ['./test-es.component.css']
})
export class TestEsComponent implements OnInit {

  isConnected = false;
  status: string;

  customerGroups: CustomerGroup[] = [];
  field = Configuration.queryField;

  constructor(private es: ElasticsearchService, private cd: ChangeDetectorRef) {
    this.isConnected = false;
  }

  ngOnInit() {
    this.es.isAvailable().then(() => {
      this.status = 'OK';
      this.isConnected = true;
    }, error => {
      this.status = 'ERROR';
      this.isConnected = false;
      console.error('Server is down', error);
    }).then(() => {
      this.cd.detectChanges();
    });
  }

  aggregateByField(field: string, query: string){
    this.es.aggregateByField(field, query)
      .then(
        response => {
          console.log(response);
          this.customerGroups = [];
          response.aggregations.group_by_state.buckets.forEach(
            keyValue => {
              let custGroup = new CustomerGroup();
              custGroup.group = keyValue.key;
              custGroup.customers = [];
              keyValue.tops.hits.hits.forEach(
                customer => {
                  let custSource = customer._source as Customer;
                  custGroup.customers.push(
                   new Customer(custSource.customernumber, custSource.first_name, custSource.last_name, custSource.street, custSource.zip, custSource.city, custSource.email)
                  );
                }
              );
              this.customerGroups.push(custGroup);
            }
          )
        }
      )
  }

  aggregate(query: string){
    this.aggregateByField(this.field, query);
  }

}
