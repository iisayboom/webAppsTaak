import { Component, Input, OnInit } from '@angular/core';
import { Thread } from '../../Thread/thread.model';
import { AuthenticationService } from '../authentication.service';
import { ThreadDataService } from '../../Thread/thread-data.service';

@Component({
  selector: '[app-profile-container]',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  @Input() public thread:Thread;
  
    constructor(private auth:AuthenticationService, private threadDataService:ThreadDataService) { }
  
    ngOnInit() {
    }
    
    public get descriptionShort():string {
      var size = 20;
      var result = this.thread.inhoud.substring(0,80);
  
      if(this.thread.inhoud.length >= size) {
        result = result + "...";
      }
  
      return result;
    }
  
    public get replies():number {
      return this.thread.replies.length;
    }

}
