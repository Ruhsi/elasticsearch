import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ElasticsearchService} from "../elasticsearch.service";
import {Customer} from "../modals/customer";
import {Configuration} from "../configuration/configuration";


@Component({
  selector: 'app-test-es',
  templateUrl: './test-es.component.html',
  styleUrls: ['./test-es.component.css']
})
export class TestEsComponent implements OnInit {

  isConnected = false;
  status: string;

  customerGroups: Customer[];
  field = Configuration.queryField;

  constructor(private es: ElasticsearchService, private cd: ChangeDetectorRef) {
    this.isConnected = false;
  }

  ngOnInit() {

  }

  aggregateByField(field: string, query: string){
    this.es.getByQuery(field, query)
      .subscribe(
        response => {
          this.customerGroups = response;
          console.log(this.customerGroups);
          // response.aggregations.group_by_state.buckets.forEach(
          //   keyValue => {
          //     let custGroup = new CustomerGroup();
          //     custGroup.group = keyValue.key;
          //     custGroup.customers = [];
          //     keyValue.tops.hits.hits.forEach(
          //       customer => {
          //         let custSource = customer._source as Customer;
          //         custGroup.customers.push(
          //          new Customer(custSource.customernumber, custSource.first_name, custSource.last_name, custSource.street, custSource.zip, custSource.city, custSource.email)
          //         );
          //       }
          //     );
          //     this.customerGroups.push(custGroup);
           // }
 //         )
        }
      )
  }

  aggregate(query: string){
    this.aggregateByField(this.field, query);
  }

}
