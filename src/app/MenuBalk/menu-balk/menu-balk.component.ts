import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from '../../user/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-balk',
  templateUrl: './menu-balk.component.html',
  styleUrls: ['./menu-balk.component.css']
})
export class MenuBalkComponent implements OnInit {

  constructor(private auth:AuthenticationService){}

  ngOnInit() {
    
  }

  get currentUser(): Observable<string> {
    return this.auth.user$;
  }

}
