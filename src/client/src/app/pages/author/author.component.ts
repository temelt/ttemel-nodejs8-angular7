import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthorService} from "../../shared/services";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  authorModal: BsModalRef;
  form: FormGroup;


  data = [];
  columns = [
    {prop: 'id', name: 'No'},
    {prop: 'firstName', name: 'First Name'},
    {prop: 'lastName', name: 'Last Name'}
  ];

  constructor(private authorService: AuthorService, private modalService: BsModalService,private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName : [null, [Validators.required]],
      lastName : [null, Validators.required],
    });

    this.refreshData();
  }

  saveAuthor() {
    if (this.form.invalid) {
      return;
    }
    this.authorService.create(this.form.value).subscribe(
      (resp) => this.refreshData()
    );
    this.authorModal.hide();
    this.form.reset();
  }

  openModal(template: TemplateRef<any>) {
    this.authorModal = this.modalService.show(template);
  }

  closeAndResetModal(){
    this.authorModal.hide();
    this.form.reset();
  }

  refreshData(){
    this.authorService.getAll().subscribe(
      (resp) => {
        this.data = resp;
      }
    );
  }

  get f() { return this.form.controls; }

}
