import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sbi';
  email="sbiinsurance@gmail.com";
  fullname="sanjayjagadish";
  public getNotification=true;
  color="blue";
  cards=["credit","debit","rupay","visa"];
  onSub()
  {
    console.log('subscribed successfully')
  }
  onUns(event:any)
  {
    console.log(event);
    console.log('unsubscribed successfully');
  }
}
