import { Component, Input, OnInit } from '@angular/core';
import { ThreadReply } from '../ThreadReply.model';

@Component({
  selector: 'app-thread-reply-component',
  templateUrl: './thread-reply-component.component.html',
  styleUrls: ['./thread-reply-component.component.css']
})
export class ThreadReplyComponentComponent implements OnInit {
  @Input() public threadReply:ThreadReply;

  constructor() { }

  ngOnInit() {

  }

}
