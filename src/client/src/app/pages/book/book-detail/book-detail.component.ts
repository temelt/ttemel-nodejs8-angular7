import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  /* generated with ng generate component --module book pages/book/book-detail*/

  id: number;
  private sub: any;
  data=[];
  columns=[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.columns = [
      {prop: 'id', name: 'No'},
      {prop: 'issue.id', name: 'Issue No'},
      {prop: 'description', name: 'Description'},
      {prop: 'date', name: 'Issue Date'},
      {prop: 'issueStatus', name: 'Status'},
      {prop: 'assignee.nameSurname', name: 'Assignee'}
    ];
  }

}
