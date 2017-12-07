import { ThreadReply } from './ThreadReply.model';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Thread } from './thread.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthenticationService } from '../user/authentication.service';

@Injectable()
export class ThreadDataService {

  private _appUrl = "/API/threads";
  private _appUrlProfile = "/API/Profile/";

  
  //private auth:AuthenticationService nog toevoegen
  constructor(private http:Http, private auth:AuthenticationService) {
    
  }

  public get threads(): Observable<Thread[]>  {
    return this.http.get(`${this._appUrl}/getAll`).map(response => response.json().map(thread => new Thread(thread.titel,thread.user.username, thread.inhoud,thread._id, thread.posts)));
  }

  public personalThreads(name:string): Observable<Thread[]>  {
    return this.http.get(`${this._appUrlProfile}${name}/getAllThreadsForUser`,{
      headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response => response.json().map(thread => new Thread(thread.titel,thread.user.username, thread.inhoud,thread._id, thread.posts)));
  }

  public newThread(t:Thread): Observable<Thread> {
    return this.http.post(`${this._appUrl}/${this.auth.user$.getValue()}/addThread`, t,{
      headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response => response.json()).map(thread => new Thread(thread.titel, thread.user.username, thread.inhoud, thread._id, thread.posts));
  }

  public getThread(id:string): Observable<Thread> {
    return this.http.get(`${this._appUrl}/getThread/${id}`).map(response => response.json()).map(thread => new Thread(thread.titel, thread.user.username, thread.inhoud,thread._id, thread.posts));
  }

  public newThreadReply(tr:ThreadReply, id:string): Observable<Thread> {
    return this.http.post(`${this._appUrl}/${id}/addThreadReply`, tr,{
      headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response => response.json()).map(thread => new Thread(thread.titel, thread.user.username, thread.inhoud, thread._id, thread.posts));
  }

  public verwijderThread(id:string): Observable<any> {
    return this.http.delete(`${this._appUrl}/delete/thread/${id}`, {
      //headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response => {console.log(response); return response.json()});
      headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) });
  }


}
