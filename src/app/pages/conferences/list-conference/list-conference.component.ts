import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CoreService } from 'src/app/core/services/core.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ConferenceModel } from '../conference-model';
import { Router } from '@angular/router';
import { unescapeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-list-conference',
  templateUrl: './list-conference.component.html',
  styleUrls: ['./list-conference.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ListConferenceComponent implements OnInit {

  displayedColumns: string[] = ['title', 'location', 'state', 'quota'];
  dataSource: MatTableDataSource<ConferenceModel>;
  role;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Output() new = new EventEmitter<boolean>();

  @Output() edit = new EventEmitter<ConferenceModel>();

  expandedElement: ConferenceModel;

  constructor(private coreService: CoreService,
              private router: Router, ) {}

  ngOnInit() {
    this.getUsers();
    this.role = this.coreService.getRole();
    console.log(this.role);

  }

  getUsers() {
    this.coreService.get('conferences').subscribe(
      (res: any) => {
        // console.log(res);
        const data = res ? res : [];
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  newRegister() {
    this.router.navigate(['new-conference']);
  }

  editRegister(el) {
    this.coreService.post('conferences/attendant', {uid: this.coreService.getUid(), cid: el.id}).subscribe(
      (resp: any) => {
        console.log(resp);
        this.router.navigate(['/conferences']);
      }
    );
  }

}
