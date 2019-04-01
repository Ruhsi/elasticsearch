import {Injectable} from '@angular/core';
import {Client} from 'elasticsearch-browser';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Customer} from "./modals/customer";


@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {


  private url: string = environment.url;
  private endpoint: string = this.url + "/linzag-rest-api/v1/icc/customer/search/all/";

  constructor(private http: HttpClient) {

  }



  getByQuery(field: string, query: string) {
    let qry = query.split(" ").join(",");

    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    header.set('Accept', 'application/json');
    header.set('Access-Control-Allow-Origin', "*");
    const params = new URLSearchParams();

    return this.http.get(this.endpoint + qry, {headers: header})
      .pipe(
        map((response: Customer[]) => {
          console.log(response);
            return response;
        })
      );
  }
}
