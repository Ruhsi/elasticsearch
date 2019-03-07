import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ElasticsearchService} from "../elasticsearch.service";
import {Employee} from "../modals/employee";


@Component({
  selector: 'app-test-es',
  templateUrl: './test-es.component.html',
  styleUrls: ['./test-es.component.css']
})
export class TestEsComponent implements OnInit {

  isConnected = false;
  status: string;

  employees: Employee[] = new Array<Employee>();

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

  get(value: string) {
    console.log("value:" + value);
    this.es.get(value)
      .then(
        response => {
          this.employees = new Array<Employee>();
          response.hits.hits.forEach(
            empl => {
              console.log(empl._source);
              this.employees.push(new Employee(empl._source.firstname, empl._source.lastname));
            }
          );
        });
  }

}
