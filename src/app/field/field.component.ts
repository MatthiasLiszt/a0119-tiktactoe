import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.sass']
})

@Injectable()
export class FieldComponent implements OnInit {
  //@Input() field: FieldComponent;
  @Input() myIndex: number;
  myValue: string;
  valueUpdate: Observable<any>;
  valueUrl: string;
  subscription: Subscription;

  constructor(private http: HttpClient) { 
   this.myValue='.';

  }

  ngOnInit() {
    
   //console.log("Current index: " + this.myIndex);
   this.valueUrl="/api/getboard?field="+this.myIndex;
   this.valueUpdate=this.getValue();
   this.valueUpdate.subscribe(
    (value) => this.myValue = value,
    (err) => {
      console.log("Got an error!");
      console.error(err);
     },
  );
  }
  
  getValue () {
    return this.http.get(this.valueUrl);
  }
  
}
