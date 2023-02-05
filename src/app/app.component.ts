import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  countries = [
    {
      name: "United Kingdom",
      cities: ["London", "Warwick", "Birmingham"]
    },
    {
      name: "United States",
      cities: ["New York", "Chicago", "Washington"]
    },
    {
      name: "Australia",
      cities: ["Sydney", "Adelaide", "Melbourne"]
    },
    {
      name: "Ukraine",
      cities: ["Kyiv", "Zaporizhzhia", "Irpin", "Lviv", "Lutsk"]
    }
  ];

  cities$: Observable<string>;

  countryControl: FormControl;
  cityControl: FormControl;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.countryControl = new FormControl("");
    this.cityControl = new FormControl("");

    this.cityControl.valueChanges
      .subscribe(value => {
        this.router.navigate([value]);
      });

    this.cities$ = this.countryControl.valueChanges.pipe(
      map(country => country.cities)
    );

  }

  ngOnDestroy(): void {
  }

}
