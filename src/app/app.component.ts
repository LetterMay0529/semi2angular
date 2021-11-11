import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'semi2';
  viewMode = '';
  upcoming = [
    {id: 1, title: 'Spiderman'},
    {id: 7, title: 'Superman'},
    {id: 3, title: 'Batman'},
    {id: 8, title: 'Wonder Woman'},
    {id: 6, title: 'Fifty Shades'},
   
  ];
  showing = [
    {id: 1, title: 'Captain Philip'},
    {id: 2, title: 'Conjuring'},
    {id: 3, title: 'Supernatural'},
    {id: 4, title: 'Forest'},
    {id: 5, title: 'Troy'},
  ];

  onChange(viewMode:boolean) {
    console.log(viewMode)
  }
  onClick(viewMode:boolean) {
    console.log(viewMode)
  }
}
