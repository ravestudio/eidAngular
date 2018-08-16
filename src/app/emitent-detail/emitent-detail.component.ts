import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as CanvasJS from '../../assets/canvasjs.min';

import { Emitent }         from '../emitent';
import { Financial} from '../financial';
import { EmitentService }  from '../emitent.service';
import { FinancialService} from '../financial.service';
import { pureFunction1 } from '@angular/core/src/render3/pure_function';
import { promise } from 'protractor';
import { resolve } from 'path';
import { reject } from 'q';

@Component({
  selector: 'app-emitent-detail',
  templateUrl: './emitent-detail.component.html',
  styleUrls: ['./emitent-detail.component.css']
})
export class EmitentDetailComponent implements OnInit {
  @Input() emitent: Emitent;

  financials: Financial[];

  constructor(
    private route: ActivatedRoute,
    private emitentService: EmitentService,
    private financialService : FinancialService,
    private location: Location) { }

  ngOnInit() {

    var p1 = this.getEmitent().then(emi =>
      {
        this.emitent = emi;
      });

    var p2 = this.getFinancials().then(fins =>
      {
        this.financials = fins;
      });

    Promise.all([p1, p2]).then(values => { 
        console.log(values); 
      });

      

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

  getEmitent(): Promise<Emitent> {
    const id = +this.route.snapshot.paramMap.get('id');
    const promise =
    new Promise<Emitent>((resolve, reject) => {
      this.emitentService.getEmitent(id)
      .subscribe(emitent => resolve(emitent));
    });
    return promise;
  }

  getFinancials(): Promise<Financial[]> {
    const id = +this.route.snapshot.paramMap.get('id');

    const promise = new Promise<Financial[]>((resolve, reject) =>{

      this.financialService.getFinancials(id)
      .subscribe(financials => {
        var temp: Financial[] = financials.sort((f1, f2) =>
        {
          return f1.Year - f2.Year;
        });
        resolve(temp);
      });
    });

    return promise;

  }

}
