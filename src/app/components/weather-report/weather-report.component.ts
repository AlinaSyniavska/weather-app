import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services";
import {ActivatedRoute} from "@angular/router";
import {concatMap, filter, map, Observable} from "rxjs";

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  data: Observable<any>;
  today: Date = new Date();
  loading = false;

  constructor(private weatherService: WeatherService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.activatedRoute.params.pipe(
      map(params => params["locationName"]),
      filter(name => !!name),
      concatMap(name => this.weatherService.getWeatherForCity(name))
    );

    console.log(this.data);

  }

}
