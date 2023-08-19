import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {


  constructor(private readonly notificationService: NotificationService) { }

  ngOnInit(): void {
  }
  error$ = this.notificationService.errors$();
}
