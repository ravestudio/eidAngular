import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Emitent }         from '../emitent';
import { EmitentService }  from '../emitent.service';

@Component({
  selector: 'app-emitent-detail',
  templateUrl: './emitent-detail.component.html',
  styleUrls: ['./emitent-detail.component.css']
})
export class EmitentDetailComponent implements OnInit {
  @Input() emitent: Emitent;

  constructor(
    private route: ActivatedRoute,
    private emitentService: EmitentService,
    private location: Location) { }

  ngOnInit() {
    this.getEmitent();
  }

  getEmitent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.emitentService.getEmitent(id)
      .subscribe(emitent => this.emitent = emitent);
  }

}
