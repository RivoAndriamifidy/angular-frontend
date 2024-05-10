import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8081/api/v1/employees'; 

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
