import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.css']
})
export class CtaSectionComponent {

  subscritor: string = 'Enter email';
    limpaTexto():void{
    this.subscritor = "Introduza outro email....";
  }
}
