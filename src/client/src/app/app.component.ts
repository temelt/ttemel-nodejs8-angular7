import { Component, OnInit } from '@angular/core';
import { NotificationService } from './core/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  notification: string;
  showNotification: boolean;
  constructor(
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.notificationService
      .notification$
      .subscribe(message => {
        this.notification = message;
        this.showNotification = true;
      });
  }
}
