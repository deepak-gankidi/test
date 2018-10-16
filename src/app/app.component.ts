import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router, NavigationEnd } from '@angular/router';
import { locales } from './locales.values';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  locales = [];
  currentUrl = "";
  countryForm: FormGroup;
  countries = [{
    id:'USA',
    value:'USA-en',
    translate:'usa-en'},
    {
      id:'CANADA',
      value:'CANADA-en',
      translate:'canada-en'}
    ];
  buttonText = "Submit in English";

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    
    this.countryForm = this.fb.group({
      countryControl: ['Canada']
    });

    this.locales = locales;

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
     .subscribe((event:NavigationEnd) => {
       this.currentUrl = this.router.url;
     });

  }
}
