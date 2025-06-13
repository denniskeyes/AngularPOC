import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HealthcareDataService } from '../services/healthcare-data.service';

@Component({
  selector: 'app-healthcare-table',
  standalone: false,
  templateUrl: './healthcare-table.component.html',
  styleUrl: './healthcare-table.component.scss'
})
export class HealthcareTableComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['state', 'issuerName', 'issuerId', 'planType', 'planId', 'issuerDenialRate', 'planDenialRate'];

  constructor(private dataService: HealthcareDataService) {

  }

  ngOnInit() {
    // API call for data, default 2022
    //this.dataService.getData("2022").subscribe({
    //    next: (response) => {
    //      console.log('This is the getData response: ' + response);
    //    },
    //    error: (err) => {
    //      console.log('error when making request: ' + JSON.stringify(err));
    //    },
    //    complete: () => {
    //      console.log('request complete');
    //    }
    //  });
  }

}
