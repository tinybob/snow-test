import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  records: any;

  constructor(
    private http: HttpClient) { }

  ngOnInit() {
    // make an api call. Treat the "HttpClient" service just as you would the standard Http service.
    this.http.get<any>('/api/now/table/x_202883_x_source').subscribe( res => {

      // let's take the response, parse the dates and store it in a records array
      this.records = res.result.map( record => {
        record.sys_created_on = new Date(record.sys_created_on);
        return record;

      // a quick and dirty sort...
      });//.sort( (a,b) => `${a.first_name}${a.last_name}` < `${b.first_name}${b.last_name}` ? - 1 : 1);

    });
  }

}