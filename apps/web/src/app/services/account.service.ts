import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of, throwError } from 'rxjs'
import { Apollo } from 'apollo-angular'
import { catchError, map } from 'rxjs/operators'
import { USER_LOGIN_GQL } from '../../graphql/mutations/user-login.mutation'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false)

  // constructor(private apollo: Apollo) {
  //   // Optionally, check login status when the application starts
  //   this.checkLoginStatus()
  //   console.log(this.checkLoginStatus())
  // }
  constructor(private cookieService: CookieService, private apollo: Apollo) {
    console.log(this.cookieService.get('token'))
  }

  checkAuthenticationStatus(): void {
    const token = this.cookieService.get('token')
    const tokenExpires = this.cookieService.get('token-expires')

    if (token && tokenExpires) {
      const tokenExpiresDate = new Date(tokenExpires)
      if (tokenExpiresDate > new Date()) {
        this.isLoggedInSubject.next(true)
      } else {
        // Token is expired
        // You can also clear the token from cookies here if needed
      }
    }
  }

  login(email: string, password: string): Observable<boolean> {
    return this.apollo
      .mutate({
        mutation: USER_LOGIN_GQL,
        variables: {
          loginInput: {
            email,
            password
          }
        },
        context: {
          withCredentials: true // Ensure cookies are sent with the request
        }
      })
      .pipe(
        map((result: any) => {
          const user = result.data?.login
          if (user) {
            this.isLoggedInSubject.next(true)
            return true
          } else {
            return false
          }
        }),
        catchError((error) => {
          console.error('Login error', error)
          return throwError(() => new Error('Login failed'))
        })
      )
  }

  logout(): Observable<boolean> {
    // Implement logout logic here. This could involve making a GraphQL mutation to invalidate the session on the server.
    // For this example, let's assume logging out is always successful.
    this.isLoggedInSubject.next(false)
    return of(true)
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable()
  }

  private checkLoginStatus(): void {
    // Implement logic to check login status on application startup
    // This could involve making a GraphQL query to the server to check the session
    // For this example, let's assume the user is logged out by default.
    this.isLoggedInSubject.next(false)
  }
}
