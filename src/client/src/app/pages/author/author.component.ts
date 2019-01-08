import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  constructor(private bookService: BookService) {

  }

  ngOnInit() {

  }

}
