import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MyTableComponent } from './my-table/my-table.component';
import { Message } from './models/message';
import { Store } from '@ngxs/store';
import { AppActions } from '../store/app.actions';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
  constructor(private store: Store) { }
  ngOnInit() {
    this.store.dispatch(new AppActions.LaunchApp(new Date()))
  }
}
