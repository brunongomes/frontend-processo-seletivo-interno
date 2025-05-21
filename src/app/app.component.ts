import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlansComponent } from './pages/plans/plans.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlansComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-processo-seletivo-interno';
}
