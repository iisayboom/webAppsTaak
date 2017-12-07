import { UserModule } from './user/user.module';
import { ThreadReplyComponentComponent } from './Thread/thread-reply-component/thread-reply-component.component';
import { AuthGuardService } from './user/auth-guard.service';
import { RegisterComponent } from './user/register/register.component';
import { LogoutComponent } from './user/logout/logout.component';
import { LoginComponent } from './user/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreadComponent } from './Thread/thread/thread.component';
import { ThreadContainerComponent } from './Thread/thread-container/thread-container.component';
import { MenuBalkComponent } from './MenuBalk/menu-balk/menu-balk.component';
import { AppRoutingModule } from './app-routing.module';
import { NewThreadComponent } from './Thread/new-thread/new-thread.component';
import {SuiModule} from 'ng2-semantic-ui';
import { ThreadDataService } from './Thread/thread-data.service';
import { AuthenticationService } from './user/authentication.service';
import { OpenThreadComponentComponent } from './Thread/open-thread-component/open-thread-component.component';
import { ThreadResolver } from './Thread/Thread.Resolver';
import { ProfileComponent } from './user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadComponent,
    ThreadContainerComponent,
    MenuBalkComponent,
    NewThreadComponent,
    OpenThreadComponentComponent,
    ThreadReplyComponentComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SuiModule,
    ReactiveFormsModule,
    UserModule
  ],
  providers: [ThreadDataService,AuthenticationService,AuthGuardService, ThreadResolver],
  bootstrap: [AppComponent]
})

export class AppModule { }
