import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Employee} from "../modals/employee";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  myControl = new FormControl();
  @Input() options: Employee[];
  @Output() keyupEvent: EventEmitter<string> = new EventEmitter<string>(false);

  ngOnInit() {
    console.log(this.options);
  }

  get(value: string){
    console.log(value);
    this.keyupEvent.emit(value);
  }

}
