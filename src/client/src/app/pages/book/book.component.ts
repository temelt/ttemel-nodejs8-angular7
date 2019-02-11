import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BookService} from "../../shared/services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @ViewChild('colActionTemplate') colActionTemplate: TemplateRef<any>;

  bookModal: BsModalRef;
  form: FormGroup;

  constructor(private bookService: BookService, private modalService: BsModalService, private formBuilder: FormBuilder) {

  }

  data = [];
  columns = [];

  ngOnInit() {
    this.columns = [
      {prop: 'id', name: 'No'},
      {prop: 'name', name: 'Book Name'},
      {prop: 'isbn', name: 'ISBN'},
      {prop: 'publishDate', name: 'Publish Date'},
      {name: 'Actions', prop: 'id', cellTemplate: this.colActionTemplate, flexGrow: 1, sortable: false}
    ];

    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      isbn: [null, Validators.required],
      publishDate: [null, Validators.required],
    });

    this.refreshData();
  }

  saveBook() {
    if (this.form.invalid) {
      return;
    }
    this.bookService.create(this.form.value).subscribe(
      (resp) => this.refreshData()
    );
    this.bookModal.hide();
    this.form.reset();
  }

  openModal(template: TemplateRef<any>) {
    this.bookModal = this.modalService.show(template);
  }

  closeAndResetModal() {
    this.bookModal.hide();
    this.form.reset();
  }

  deleteBook(value) {
    console.log(value);
  }

  refreshData() {
    this.bookService.getAll().subscribe(
      (resp) => {
        this.data = resp;
      }
    );
  }

  get f() {
    return this.form.controls;
  }

}
