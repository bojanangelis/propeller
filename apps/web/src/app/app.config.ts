import { ApplicationConfig } from '@angular/core'
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router'
import { appRoutes } from './app.routes'
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core'
import { provideHttpClient } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'
import { MatSnackBar } from '@angular/material/snack-bar'
import { CookieService } from 'ngx-cookie-service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink): ApolloClientOptions<unknown> {
        return {
          cache: new InMemoryCache({}),
          credentials: 'include',
          link: ApolloLink.from([
            httpLink.create({
              uri: 'http://localhost:3000/graphql'
            })
          ])
        }
      },
      deps: [HttpLink]
    },
    Apollo,
    MatSnackBar,
    CookieService,
    provideHttpClient(),
    provideAnimations()
  ]
}
