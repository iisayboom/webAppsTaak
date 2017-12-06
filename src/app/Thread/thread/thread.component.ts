import { ThreadDataService } from '../thread-data.service';
import { Thread } from '../thread.model';
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: '[app-thread]',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

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
