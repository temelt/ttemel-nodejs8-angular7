import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthorService} from "../../shared/services";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  authorModal: BsModalRef;

  author = {
    firstName: "",
    lastName: ""
  };

  data = [];
  columns = [
    {prop: 'id', name: 'No'},
    {prop: 'firstName', name: 'First Name'},
    {prop: 'lastName', name: 'Last Name'}
  ];

  constructor(private authorService: AuthorService, private modalService: BsModalService) {

  }

  ngOnInit() {
    this.authorService.getAll().subscribe(
      (resp) => {
        this.data = resp;
      }
    );
  }

  saveAuthor() {

    this.authorService.create(this.author).subscribe(
      (resp) => console.log(resp)
    );
    console.log("save author-" + this.author.firstName)
    this.author = {
      firstName: "",
      lastName: ""
    };
    this.authorModal.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.authorModal = this.modalService.show(template);
  }

}
