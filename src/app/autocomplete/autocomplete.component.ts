import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Employee} from "../modals/employee";
import {EmployeeGroup} from "../modals/employeeGroup";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  myControl = new FormControl();
  @Input() options: EmployeeGroup[];
  @Output() keyupEvent: EventEmitter<string> = new EventEmitter<string>(false);

  ngOnInit() {

  }

  get(value: string){
    this.keyupEvent.emit(value);
  }

}
