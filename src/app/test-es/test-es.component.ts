import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ElasticsearchService} from "../elasticsearch.service";
import {Employee} from "../modals/employee";
import {EmployeeGroup} from "../modals/employeeGroup";
import {Configuration} from "../configuration/configuration";


@Component({
  selector: 'app-test-es',
  templateUrl: './test-es.component.html',
  styleUrls: ['./test-es.component.css']
})
export class TestEsComponent implements OnInit {

  isConnected = false;
  status: string;

  employeeGroups: EmployeeGroup[] = [];
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
          this.employeeGroups = [];
          response.aggregations.group_by_state.buckets.forEach(
            keyValue => {
              let empGroup = new EmployeeGroup();
              empGroup.group = keyValue.key;
              empGroup.employees = [];
              keyValue.tops.hits.hits.forEach(
                employee => {
                  empGroup.employees.push(
                   new Employee(employee._source.firstname, employee._source.lastname, employee._source.zipcode)
                  );
                }
              );
              this.employeeGroups.push(empGroup);
            }
          )
        }
      )
  }

  aggregate(query: string){
    this.aggregateByField(this.field, query);
  }

}
