import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BookService} from "../../shared/services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {ConfirmModalComponent} from "../../shared/components";

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
  managers = [
    {id: 1, nameSurname: 'Ahmet TEST'},
    {id: 2, nameSurname: 'Mehmet TEST'}
    ];

  ngOnInit() {
    this.columns = [
      {prop: 'id', name: 'No'},
      {prop: 'name', name: 'Book Name'},
      {prop: 'isbn', name: 'ISBN'},
      {prop: 'publishDate', name: 'Publish Date'},
      {prop: 'author.firstName', name: 'Author Name'},
      {prop: 'author.lastName', name: 'Author Surname'},
      {name: 'Actions', prop: 'id', cellTemplate: this.colActionTemplate, flexGrow: 1, sortable: false}
    ];

    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      isbn: [null, Validators.required],
      publishDate: [null, Validators.required],
      author_id: [null, Validators.required],
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

  showConfirmationModal(value): void {
    const modal = this.modalService.show(ConfirmModalComponent);
    (<ConfirmModalComponent>modal.content).showConfirmationModal(
      'Delete Confirmation',
      'Do you want to delete book?'
    );

    (<ConfirmModalComponent>modal.content).onClose.subscribe(result => {
      if (result === true) {
        console.log(value);
      } else if (result === false) {
        console.log(value);
      }
    });
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
