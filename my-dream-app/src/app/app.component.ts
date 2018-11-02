import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular App';

  constructor(private http: Http){

  }

  ngOnInit(){
    this.http.get('http://localhost:4200/assets/dummy.json')
    .toPromise()
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      this.courses = data
    })
  }

  courses: Array<object> = [
   
  ]
}
