import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
  routeParams;
  data;

  constructor(
    private activatedRoute: ActivatedRoute,
    private zone: NgZone
  ) { }

  ngOnInit() {

  //  this.zone.run(() => {
      this.routeParams = this.activatedRoute.snapshot.queryParams;
      this.data = this.activatedRoute.snapshot.data;
    //});
  }
}
