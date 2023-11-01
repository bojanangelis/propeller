import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AccountService } from '../../services/account.service'
import { Router, RouterLink } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'propeller-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  providers: [CookieService],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = ''
  password: string = ''
  loading: boolean = false
  error: string | null = null

  constructor(private accountService: AccountService, private router: Router) {}

  onSubmit() {
    this.loading = true
    this.error = null

    this.accountService.login(this.email, this.password).subscribe({
      next: (isLoggedIn) => {
        this.loading = false
        if (isLoggedIn) {
          this.router.navigate(['/home'])
        } else {
          this.error = 'Invalid email or password'
        }
      },
      error: (err) => {
        console.error('Login error', err)
        this.loading = false
        this.error = 'An error occurred during login. Please try again later.'
      }
    })
  }
}
