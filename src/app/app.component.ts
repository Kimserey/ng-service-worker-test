import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Test of Service Worker';
  persons: { name: string }[];
  companies: { name: string }[];

  constructor(private http: HttpClient) { }

  loadPersons() {
    this.http.get<any>("https://localhost:5001/api/persons")
      .subscribe(persons => {
        this.persons = persons;
      });
  }

  loadCompanies() {
    this.http.get<any>("https://localhost:5001/api/companies")
      .subscribe(companies => {
        this.companies = companies;
      });
  }
}