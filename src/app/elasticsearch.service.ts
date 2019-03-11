import {Injectable} from '@angular/core';
import {Client} from 'elasticsearch-browser';
import {environment} from "../environments/environment";

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
      host: environment.url,
      log: environment.log
    });
  }

  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'hello test!'
    });
  }

  aggregateByField(field: string, query: string) {
    return this.client.search({
        body: {
          "size": 0,
          "query": {
            "bool": {
              "should": [
                {
                  "query_string": {
                    "default_field": "*",
                    "query": "*" + query + "*"
                  }
                }
              ]
            }
          },
          "aggs": {
            "group_by_state": {
              "terms": {
                "field": field + ".keyword"
              },
              "aggs": {
                "tops": {
                  "top_hits": {
                    "size": 10
                  }
                }
              }
            }
          }
        }
      }
    )
  }
}
