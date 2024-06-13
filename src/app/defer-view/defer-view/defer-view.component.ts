import { Component } from '@angular/core';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'app-defer-view',
  standalone: true,
  imports: [ChildViewComponent],
  templateUrl: './defer-view.component.html',
  styleUrl: './defer-view.component.scss'
})
export class DeferViewComponent {

}
