import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'TicTacToe With MaterialDesign ...';
  board=[0,0,0,2,2,2,0,0,0];//essential for ngFor !!!

  xoDot(){
    //alert('xoDot clicked');
  }
}
