import { Component } from '@angular/core';
import * as Editor from './ckeditor5/build/ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ckeditor-project3';
  public Editor : any = Editor;
}
