import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'propeller-app-header-component',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './app-header-component.component.html',
  styleUrls: ['./app-header-component.component.scss'],
})
export class AppHeaderComponentComponent {
  @Output() columnsViewChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 14;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
  onCountItemsUpdated(newCountItems: number) {
    this.itemsShowCount = newCountItems;
  }

  onColumnsViewUpdated(newColsNum: number): void {
    this.columnsViewChange.emit(newColsNum);
  }
}
