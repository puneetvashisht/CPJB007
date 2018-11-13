import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular App';

  // constructor(private http: Http){

  // }

  constructor(public http: HttpClient){

  }

  ngOnInit(){
    // this.http.get('http://localhost:8080/courses')
    this.http.get('http://localhost:8080/springjwt/cities')
    .subscribe(data => {
      console.log(data);
      this.courses = data
     }, err => console.log(err));
    // .toPromise()
    // .then(res=>res.json())
    // .then(data=>{
    //   console.log(data)
    //   this.courses = data
    // })
  }

  courses: any = [
   
  ]
}
