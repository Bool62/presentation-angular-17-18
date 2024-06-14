import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-child-view',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './child-view.component.html',
  styleUrl: './child-view.component.scss',
})
export class ChildViewComponent {
  titre = input.required<string>();
}
