import { Thread } from '../thread.model';
import { Component, OnInit } from '@angular/core';
import { ThreadDataService } from '../thread-data.service';

@Component({
  selector: 'app-thread-container',
  templateUrl: './thread-container.component.html',
  styleUrls: ['./thread-container.component.css']
})
export class ThreadContainerComponent implements OnInit {

  public _threads: Thread[];

  constructor(private _threadDataService:ThreadDataService) { }

  ngOnInit() {
    this._threadDataService.threads.subscribe(threads => this._threads = threads);
  }

	public get threads(): Thread[] {
		return this._threads;
	}
  

}
