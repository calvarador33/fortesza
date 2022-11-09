import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit  {
    
  @Input() score: string;

    
  actives = [];
  disabled = [];

  constructor() {
    this.actives = [];
    this.disabled = [];
  }

  ngOnInit() {
    this.actives = Array(Number(this.score));
    this.disabled = Array( environment.MAX_SCORE - Number(this.score));

  }

}
