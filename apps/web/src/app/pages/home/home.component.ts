import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppHeaderComponentComponent } from '../components/app-header-component/app-header-component.component';
import { FiltersComponent } from '../components/filters/filters.component';
import { ProductBoxComponent } from '../components/product-box/product-box.component';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'propeller-home',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatGridListModule,
    AppHeaderComponentComponent,
    FiltersComponent,
    ProductBoxComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  onColumsViewChange(newColsNum: number): void {
    this.cols = newColsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
