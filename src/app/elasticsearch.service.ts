import {Injectable} from '@angular/core';
import {Client} from 'elasticsearch-browser';

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {

  private client: Client;

  constructor() {
    if (!this.client) {
      this.connect();
    }
  }

  private connect() {
    this.client = new Client({
      host: "http://localhost:9200",
      log: "trace"
    });
  }

  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'hello test!'
    });
  }

  get(value: string) {
    console.log("service:" + value);
    return this.client.search({
      body: {
        "query": {
          "bool": {
            "should": [
              {
                "query_string": {
                  "default_field": "firstname",
                  "query": "*" + value + "*"
                }
              },
              {
                "query_string": {
                  "default_field": "lastname",
                  "query": "*" + value + "*"
                }
              }
            ]
          }
        }
      }
    })
  }
}
