import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.scss']
  styles: []
})
export class HeaderComponent implements OnInit {
  version!: string;
  constructor() { }

  ngOnInit(): void {
    this.version = "version 1";
  }

}
