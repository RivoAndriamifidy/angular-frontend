import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8080/api/v1/employees'; 

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post(`${this.apiUrl}`, employee);
  }

  getEmployeeById(id: number|null): Observable<Employee>{
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  updateEmployee(id: number|null, employee: Employee): Observable<Object>{
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
