import { ThreadDataService } from './Thread/thread-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ThreadDataService]
})
export class AppComponent {
  title = 'app';
}
