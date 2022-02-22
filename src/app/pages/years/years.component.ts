import { HttpService } from '../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {
  years: Observable<string[]>;
  constructor(public http: HttpService) {}

  ngOnInit() {
    this.years = this.http.getYears().pipe(
      map(array => array.sort(( a: string,b: string) => parseInt(a) - parseInt(b) ))
    );
  }

}