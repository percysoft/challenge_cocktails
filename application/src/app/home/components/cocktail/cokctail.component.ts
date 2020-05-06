import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../models/cocktail.model';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CokctailComponent implements OnInit {
  @Input() product: Partial<Cocktail>;
  constructor() {}

  ngOnInit(): void {}
}
