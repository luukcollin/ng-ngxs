import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message';

@Component({
  selector: 'app-my-table',
  standalone: true,
  imports: [],
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.scss'
})
export class MyTableComponent {
  @Output() onItemClicked = new EventEmitter<Message>();

  private readonly _selectedMesage$ = new BehaviorSubject<Message | undefined>(undefined);

  @Input() set selectedMessage(value: Message | null | undefined) {
    if (value) {
      this._selectedMesage$.next(value);
    }
  }
  get selectedMessage() {
    return this._selectedMesage$.value;
  }

  private readonly _rows$ = new BehaviorSubject<Message[]>([]);
  @Input() set rows(value: Message[] | null) {
    if (value != null) this._rows$.next(value)
  }
  get rows(): Message[] {
    return this._rows$.value;
  }

  onRowClicked(message: Message) {
    this.onItemClicked.emit(message);
  }
}
