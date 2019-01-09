import {Component, OnInit} from '@angular/core';
import {AuthorService} from "../../shared/services";
import {Observable} from "rxjs";
import {Author} from "../../shared/models";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  data = [];
  columns = [
    {prop: 'No'},
    {name: 'First Name'},
    {name: 'Last Name'}
  ];

  constructor(private authorService: AuthorService) {

  }

  ngOnInit() {
    this.authorService.getAll().subscribe(
      (resp) => {
        this.data = resp;
      }
    );
  }

}
