import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';

  courses: Array<object> = [
    {caption: "Angular", votes: 3},
    {caption: "React", votes: 5},
    {caption: "Ember", votes: 1},
    {caption: "JS", votes: 9}
  ]
}
