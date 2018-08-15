import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as CanvasJS from '../../assets/canvasjs.min';

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

    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        color: "#014D65",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });
      
    chart.render();
  }

  getEmitent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.emitentService.getEmitent(id)
      .subscribe(emitent => this.emitent = emitent);
  }

}
