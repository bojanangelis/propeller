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

  constructor(private cookieService: CookieService, private apollo: Apollo) {}

  checkAuthenticationStatus(): void {
    const token = this.cookieService.get('token')
    const tokenExpires = this.cookieService.get('token-expires')

    if (token && tokenExpires) {
      const tokenExpiresDate = new Date(tokenExpires)
      if (tokenExpiresDate > new Date()) {
        this.isLoggedInSubject.next(true)
      } else {
        this.cookieService.deleteAll()
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
    this.isLoggedInSubject.next(false)
    return of(true)
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable()
  }

  private checkLoginStatus(): void {
    this.isLoggedInSubject.next(false)
  }
}
