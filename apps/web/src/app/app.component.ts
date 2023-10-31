import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { GET_ALL_USERS_GQL } from '../graphql/queries/get-all-users.query';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
  ],
  selector: 'propeller-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: any[] = [];
  error: any;
  loading: boolean = true;

  constructor(private apollo: Apollo) {}

  loadAllUsers() {
    this.apollo
      .watchQuery({
        query: GET_ALL_USERS_GQL,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.loading = false;
        this.error = error;
        this.users = data.users;
      });
  }

  ngOnInit(): void {
    this.loadAllUsers();
  }
}
