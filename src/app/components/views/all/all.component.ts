import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  category$: Observable<string | undefined>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.category$ = this.route.params.pipe(
      pluck('category'),
      shareReplay(1)
    );
  }
}
