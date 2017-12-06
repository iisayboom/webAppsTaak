import { User } from '../User.model';
import {ThreadDataService} from '../../Thread/thread-data.service';
import {Thread} from '../../Thread/thread.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ThreadContainerComponent } from '../../Thread/thread-container/thread-container.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public _threads: Thread[];
  
    constructor(private _threadDataService:ThreadDataService, private auth:AuthenticationService) { }
  
    ngOnInit() {
      this._threadDataService.personalThreads(this.auth.user$.getValue()).subscribe(threads => this._threads = threads);
    }

    public get showUser(): string {
      return this.auth.user$.getValue();
    }

    public get threads(): Thread[] {
      return this._threads;
    }


}
