import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Customer} from "../modals/customer";
import {CustomerGroup} from "../modals/customerGroup";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  myControl = new FormControl();
  @Input() customers: CustomerGroup[];
  @Output() keyupEvent: EventEmitter<string> = new EventEmitter<string>(false);

  selectedCustomer: Customer;

  ngOnInit() {

  }

  get(value: string){
    this.keyupEvent.emit(value);
  }

  selectCustomer(customer: Customer){
    this.selectedCustomer = customer;
    console.log(customer);
  }

}
