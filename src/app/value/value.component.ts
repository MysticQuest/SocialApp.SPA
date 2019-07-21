import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
// import { HttpClient, HttpRequest } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getvalues();
  }

  getvalues() {
   this.http.get('http://localhost:5000').subscribe(response => {
   console.log(response);
  });
  }

}


