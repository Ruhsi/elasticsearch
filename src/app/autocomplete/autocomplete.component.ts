import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Customer} from "../modals/customer";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  myControl = new FormControl();
  @Input() customers: Customer[];
  @Output() keyupEvent: EventEmitter<string> = new EventEmitter<string>(false);

  selectedCustomer: Customer;

  ngOnInit() {
    console.log(this.customers);
  }

  get(value: string){
    this.keyupEvent.emit(value);
  }

  selectCustomer(customer: Customer){
    this.selectedCustomer = customer;
  }

}
