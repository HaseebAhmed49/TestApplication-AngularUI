import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  baseApiUrl: string = environment.baseApiUrl;
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employees/get-all-employees');
  }

  addEmployee(addEmployeeRequest:Employee): Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
   return this.http.post<Employee>(this.baseApiUrl + '/api/Employees/add-employee',addEmployeeRequest);
  }

  getEmployeeById(id: string): Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + '/api/Employees/get-employee-by-id/' + id)
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/Employees/update-employee-by-id/' + id,updateEmployeeRequest);
  }

  deleteEmployee(id: string): Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + '/api/Employees/delete-employee-by-id/' + id)
  }

}