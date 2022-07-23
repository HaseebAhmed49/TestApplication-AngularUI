import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees:Employee[] = [
    {
      id: '5b4ed4cc-j35ksn5jslj',
      name:'Haseeb Ahmed',
      email: 'haseebahmed02@gmail.com',
      phone:3338437949,
      salary:60000,
      department:'ATM'
    },
    {
      id: '8htks5h69-j35ksn5jslj',
      name:'Umair Ahmed',
      email: 'umairahmed02@gmail.com',
      phone:3338437949,
      salary:100000,
      department:'QPI'
    }
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
