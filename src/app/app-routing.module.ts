import { ThreadResolver } from './Thread/Thread.Resolver';
import { OpenThreadComponentComponent } from './Thread/open-thread-component/open-thread-component.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuardService } from './user/auth-guard.service';
import { ThreadContainerComponent } from './Thread/thread-container/thread-container.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewThreadComponent } from './Thread/new-thread/new-thread.component';
import { RegisterComponent } from './user/register/register.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ThreadReplyComponentComponent } from './Thread/thread-reply-component/thread-reply-component.component';
import { ProfileComponent } from './user/profile/profile.component';
const appRoutes: Routes = [
    {
        path:'AllThreads',
        component: ThreadContainerComponent
    },
    {
        path:'AddThread',
        canActivate: [ AuthGuardService ],
        component: NewThreadComponent
    },
    {
        path:'Profile',
        canActivate: [ AuthGuardService ],
        component: ProfileComponent
    },
    {
        path:'Register',
        component: RegisterComponent
    },
    {
        path:'LogOut',
        component: LogoutComponent
    },
    {
        path:'Login',
        component: LoginComponent
    },
    {
        path:'Reply',
        component: ThreadReplyComponentComponent
    },
    {
        path:'OpenThread/:id',
        component: OpenThreadComponentComponent,
        resolve: {
            thread: ThreadResolver
        }
    },
    {
        path: '',
        component: ThreadContainerComponent,
        pathMatch:'full'
    },
    {
        path: '**',
        component: ThreadContainerComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
            /* { enableTracing: true} */
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}