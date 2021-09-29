import { Component, OnInit } from '@angular/core';
import { VIEWS } from '../../../utils/models/nav';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  views = VIEWS;

  ngOnInit(): void {
  }
}
