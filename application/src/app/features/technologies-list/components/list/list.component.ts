import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ListModel } from 'src/app/features/list/models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(MatTable, { static: false }) table: MatTable<ListModel>;

  constructor() { }

  ngOnInit() {
  }

}
