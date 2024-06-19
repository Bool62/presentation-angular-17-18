import { Component } from '@angular/core';
import {
  ControlEvent,
  FormControl,
  PristineChangeEvent,
  ReactiveFormsModule,
  TouchedChangeEvent,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  fg = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
    this.fg.events.subscribe((event) => {
      console.log(event);

      if (event instanceof TouchedChangeEvent) {
        console.log('Touched');
        //todo
      }
      if (event instanceof PristineChangeEvent) {
        console.log('Pristine event');
        //todo
      }
    });
  }
}
