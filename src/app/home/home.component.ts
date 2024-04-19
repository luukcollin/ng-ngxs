import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../models/message';
import { MyTableComponent } from '../my-table/my-table.component';
import { Store } from '@ngxs/store';
import { AppActions } from '../../store/app.actions';
import { AppState } from '../../store/app.state';
import { AsyncPipe } from '@angular/common';
import { MessagesActions } from '../../store/messages/messages.actions';
import { MessagesState } from '../../store/messages/messages.state';
import { MessageStoreModule } from '../../store/messages/messages.store.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MyTableComponent, AsyncPipe, MessageStoreModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  selectedMessageTable2?: Message;
  launchedAt$ = this.store.select(AppState.launchedAt);
  selectedMessage$ = this.store.select(MessagesState.getSelectedMessage);
  myMessages$ = this.store.select(MessagesState.allMessages);
  constructor(private router: Router, private store: Store) {

  }

  ngOnInit() {
    this.selectedMessage$.subscribe((newValue) => {
      console.log("Value changed to", newValue);
    })
  }
  addAllMessagesToState() {
    const myMessages: Message[] = [{ msg: "hoi", likes: 100 }, { msg: "hello", likes: 101 }, { msg: "hola", likes: 99 }];
    this.store.dispatch(new MessagesActions.SetAllMessages(myMessages));
  }

  messageSelectionChanged(event: Message) {
    this.store.dispatch(new MessagesActions.SelectMessage(event))
  }
  messageSelectionChangedForTable2(event: Message) {
    this.selectedMessageTable2 = this.selectedMessageTable2 === event ? undefined : event;
  }

  navigateToContact() {
    this.router.navigate(["/contact", { id: 123 }]);
  }
}
