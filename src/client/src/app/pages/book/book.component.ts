import { Component, OnInit } from '@angular/core';
import {AuthorService, BookService} from "../../shared/services";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService) {

  }

  data = [];
  columns = [
    {prop: 'id', name: 'No'},
    {prop: 'name', name: 'Book Name'},
    {prop: 'isbn', name: 'ISBN'},
    {prop: 'publishDate', name: 'Publish Date'}
  ];

  ngOnInit() {
    this.bookService.getAll().subscribe(
      (resp) => {
        this.data = resp;
      }
    );
  }
}
