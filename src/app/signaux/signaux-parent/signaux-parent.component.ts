import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';
import { SignauxChildComponent } from '../signaux-child/signaux-child.component';

@Component({
  selector: 'app-signaux-parent',
  standalone: true,
  imports: [SignauxChildComponent],
  templateUrl: './signaux-parent.component.html',
  styleUrl: './signaux-parent.component.scss'
})
export class SignauxParentComponent {

  model = 'Valeur du parent';
  
  divEl = viewChild<ElementRef>('viewDiv');
  // divEl = viewChild.required<ElementRef>('viewDiv');  Si non existant erreur on runtime 
  childs = viewChildren<SignauxChildComponent>;


  onOutput(event: string) {
    console.log("onOutput : " +event);
  }

  onOutputObs(event: KeyboardEvent) {
    console.log(event);
  }

  onModelChange(event: string) {
    console.log("onModelChange : "+event);
  }
  

}
