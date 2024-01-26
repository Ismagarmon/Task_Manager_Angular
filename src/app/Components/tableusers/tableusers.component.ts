import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TableusersDataSource, TableusersItem } from './tableusers-datasource';

@Component({
  selector: 'app-tableusers',
  templateUrl: './tableusers.component.html',
  styleUrl: './tableusers.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class TableusersComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableusersItem>;
  dataSource = new TableusersDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
