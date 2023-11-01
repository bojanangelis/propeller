import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { AccountService } from '../../services/account.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.accountService.isLoggedIn().pipe(
      map((isLoggedIn) => {
        if (!isLoggedIn) {
          return this.router.createUrlTree(['/login'])
        }
        return true
      })
    )
  }
}
