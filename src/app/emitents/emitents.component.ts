import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitentService } from '../emitent.service';
import { Emitent } from '../emitent';

@Component({
  selector: 'app-emitents',
  templateUrl: './emitents.component.html',
  styleUrls: ['./emitents.component.css']
})
export class EmitentsComponent implements OnInit {
  emitents: Emitent[];

  getEmitents(): void {
    this.emitentService.getEmitents()
    .subscribe(emitents => this.emitents = emitents);
  }

  showDetailsClick(emitent: Emitent): void {

    this.router.navigateByUrl("/detail/"+emitent.Id);

  }

  constructor(private router: Router, private emitentService: EmitentService) { }

  ngOnInit() {
    this.getEmitents();
  }

}
