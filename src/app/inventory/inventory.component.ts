import { Component, OnInit } from '@angular/core';
import {InventoryDataService} from "../service/inventory-data.service";
import {inventoryData} from "../entities/dataTypes";
import IDealer = inventoryData.IDealer;
import {LoginDataService} from "../service/login-data.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  //dealers: Array<IDealer> = [];
    dealers: Array<string> = [];
    selectedValue! : string;
  text! : string;
  cars! : string[];
  found! : boolean;

  constructor(private ids: InventoryDataService, private lds: LoginDataService) { }

  ngOnInit(): void {
    // this.ids.getDealers()
    //     .subscribe( results => {
    //             this.dealers = results;
    //             console.log('Words Received ' + results)
    //         },
    //             err => {
    //             console.log('Error caught at Subscribe: ' + err)
    //         },
    //         () => console.log ('Processing complete.')
    //     )
      this.selectedValue = 'Mercedes-Benz Melbourne';
      this.dealers.push('Mercedes-Benz Melbourne');
      this.dealers.push('Mercedes-Benz Toorak');
      this.dealers.push('3 Point Motors Fairfield');
      this.dealers.push('Silver Star Motors');
      this.dealers.push('3 Point Motors Mercedes-Benz');
  }
  submitForm() {
    const message = `submitting text: ${this.text}`;
    console.log(message);
  }

}
