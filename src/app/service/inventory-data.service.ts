import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {inventoryData} from "../entities/dataTypes";
import IDealer = inventoryData.IDealer;

@Injectable()
export class InventoryDataService {
  constructor(private http: HttpClient) { }

  // getWords() {
  //   return this.http.get('https://api.github.com/users');
  // }
  getCars() {
    return this.http.get('https://localhost:5001/api/Cars/');
  }

  getCarById(id: number) {
    return this.http.get('https://localhost:5001/api/Cars/' + id);
  }

  getDealers() : Observable<any>{
    const url = 'https://localhost:5001/api/Dealers/';
    const headers = this.buildHeaders();
    //return this.http.get<any>(`/cors-proxy/${url}`, {headers});
    return this.http.get<any>(url, {headers});
  }

  getDealerById(id: number) {
    return this.http.get('https://localhost:5001/api/Dealers/' + id);
  }

  private buildHeaders( ): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }
}
