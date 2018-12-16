import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'content.component.html',
  styles: []
})
export class ContentComponent {
  persons: { name: string }[];
  companies: { name: string }[];

  constructor(private http: HttpClient) { }

  loadPersons() {
    this.http.get<any>("/api/persons")
      .subscribe(persons => {
        this.persons = persons;
      });
  }

  loadCompanies() {
    this.http.get<any>("/api/companies")
      .subscribe(companies => {
        this.companies = companies;
      });
  }
}