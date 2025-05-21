import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  cardForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.cardForm = this.fb.group({
      number: ['', [Validators.required, Validators.minLength(16)]],
      holder: ['', Validators.required],
      expiry: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.cardForm.valid) {
      this.router.navigate(['/plans']);
    }
  }
}
