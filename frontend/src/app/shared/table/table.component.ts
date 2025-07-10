import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/models/table-settings';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columns: TableColumn[] = [];
  @Input() dataSource: any[] = [];
  displayedColumns: string[] = [];


  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(c => c.key);
  }

}
