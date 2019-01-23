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
    this.refreshData();
  }

  saveAuthor() {

    this.authorService.create(this.author).subscribe(
      (resp) => this.refreshData()
    );
    this.initAuthor();
    this.authorModal.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.authorModal = this.modalService.show(template);
  }

  closeAndResetModal(){
    this.authorModal.hide();
    this.initAuthor();
  }

  refreshData(){
    this.authorService.getAll().subscribe(
      (resp) => {
        this.data = resp;
      }
    );
  }

  initAuthor(){
    this.author = {
      firstName: "",
      lastName: ""
    };
  }

}
