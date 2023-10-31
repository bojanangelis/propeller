import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { GET_ALL_USERS_GQL } from '../graphql/queries/get-all-users.query';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
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
