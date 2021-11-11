import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
 
  @Input() viewMode: any;
  @Input() upcoming: any;
  @Input() showing: any;
  @Output() movieClick = new EventEmitter();

  onClick() {
    this.movieClick.emit(this.viewMode);
  }
  constructor() { }

  ngOnInit(): void {
  }


}
