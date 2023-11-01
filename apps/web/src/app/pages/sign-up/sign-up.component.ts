import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AccountService } from '../../services/account.service'
import { Router, RouterLink } from '@angular/router'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'propeller-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
  email: string = ''
  name: string = ''
  password: string = ''
  confirmPassword: string = ''
  passwordFlag = false
  loading: boolean = false
  error: string | null = null

  constructor(private accountService: AccountService, private router: Router) {}

  onSubmit() {
    this.loading = true
    this.error = null
    if (this.password !== this.confirmPassword) this.passwordFlag = true
    else {
      this.accountService.signUp(this.email, this.name, this.password).subscribe({
        next: (isLoggedIn) => {
          this.loading = false
          if (isLoggedIn) {
            this.router.navigate(['/home'])
          } else {
            this.error = 'Invalid email or password'
          }
        },
        error: (err) => {
          console.error('Sign up error', err)
          this.loading = false
          this.error = 'An error occurred during sign up. Please try again later.'
        }
      })
    }

    console.log(this.email, this.name, this.password, this.confirmPassword)
  }
}
