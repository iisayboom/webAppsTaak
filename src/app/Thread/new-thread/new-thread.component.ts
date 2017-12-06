import { Router } from '@angular/router';
import { ThreadDataService } from '../thread-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Thread } from '../thread.model';
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  public _form: FormGroup
  
  constructor(private formBuilder:FormBuilder, private threadDataService:ThreadDataService, private router:Router, private auth:AuthenticationService) { }

  ngOnInit() {
    this._form = this.formBuilder.group({
      txtTitel : ['', Validators.required],
      txtInhoud : ['', Validators.required]
    });
  }

  onSubmit() {
    const thread = new Thread(this._form.value.txtTitel,this.auth.user$.getValue(),this._form.value.txtInhoud);
    this.threadDataService.newThread(thread,).subscribe(response => {
      this.router.navigate(["/AllThreads/"]);
    });
  }

}
