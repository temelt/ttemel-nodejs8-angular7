import {Component, OnInit, TemplateRef} from '@angular/core';
import {BookService} from "../../shared/services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookModal: BsModalRef;
  form: FormGroup;

  constructor(private bookService: BookService, private modalService: BsModalService,private formBuilder: FormBuilder) {

  }

  data = [];
  columns = [
    {prop: 'id', name: 'No'},
    {prop: 'name', name: 'Book Name'},
    {prop: 'isbn', name: 'ISBN'},
    {prop: 'publishDate', name: 'Publish Date'}
  ];

  ngOnInit() {
    this.form = this.formBuilder.group({
      name : [null, [Validators.required]],
      isbn : [null, Validators.required],
      publishDate : [null, Validators.required],
    });

    this.refreshData();
  }

  saveBook() {
    debugger
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

  closeAndResetModal(){
    this.bookModal.hide();
    this.form.reset();
  }

  refreshData(){
    this.bookService.getAll().subscribe(
      (resp) => {
        this.data = resp;
      }
    );
  }

  get f() { return this.form.controls; }
}
