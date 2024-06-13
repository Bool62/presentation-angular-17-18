import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VERSION_16, VERSION_1718 } from '../shared/constantes';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent {
  VERSION_1718 = VERSION_1718;
  VERSION_16 = VERSION_16;

  //Variable ngif / @if
  logged = true;

  //Variable ngswitch / @switch
  role = 'admin';

  //Variable ngfor / @for
  data = ['A', 'B', 'C'];
}
