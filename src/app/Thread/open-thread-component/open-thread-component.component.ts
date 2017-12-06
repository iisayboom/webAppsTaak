import { ThreadReply } from '../ThreadReply.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreadDataService } from '../thread-data.service';
import { Thread } from '../thread.model';
import { Observable, Subject } from 'rxjs/Rx';
import { AuthenticationService } from '../../user/authentication.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-thread-component',
  templateUrl: './open-thread-component.component.html',
  styleUrls: ['./open-thread-component.component.css']
})
export class OpenThreadComponentComponent implements OnInit, OnDestroy {
  public _thread:Thread;
  public unsubscribe = new Subject<Boolean>();
  public _form: FormGroup

  constructor(private auth:AuthenticationService,private dataService:ThreadDataService, private route:ActivatedRoute,private formBuilder:FormBuilder,private threadDataService:ThreadDataService, private router:Router){}
  

    //methode met hulp van andreas
    ngOnInit() {
      this._form = this.formBuilder.group({
        txtInhoud : ['', Validators.required]
      });
      this.route.data.takeUntil(this.unsubscribe).subscribe(item => this._thread = item['thread']);
      this.route.paramMap.takeUntil(this.unsubscribe).subscribe(pa => this.dataService.getThread(pa.get('id')).subscribe(item => this._thread = item));
    }

	public get thread(): Thread {
		return this._thread;
  }
  
  onSubmit() {
    const post = new ThreadReply(this.auth.user$.getValue(),this._form.value.txtInhoud);
    this.threadDataService.newThreadReply(post, this._thread.id).subscribe();
    this.router.navigate(["/AllThreads/"]);
  }

    public ngOnDestroy(): void {
      this.unsubscribe.next(true);
      this.unsubscribe.complete();
    }

    public get posts(): ThreadReply[]{
      return this._thread.replies;
    }

    public get kanVerwijderen():boolean{
      return this.auth.user$.getValue() === this.thread.afzender;
    }
  
    public verwijderThread() {
      this.threadDataService.verwijderThread(this.thread.id).subscribe(response => {
        this.router.navigate(["/AllThreads/"]);
      });
    }
}
