import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  constructor(private router: Router) {}
  
  cards = [
    { icon: 'attach_money', value: 'R$ 111,00', description: 'Valor do plano pago boleto', iconColor: 'primary' },
    { icon: 'credit_card', value: 'R$ 99,90', description: 'Valor do plano pago cartão', iconColor: 'accent' },
    { icon: 'account_balance_wallet', value: 'R$ 235,26', description: 'Saldo crédito', iconColor: 'warn' },
    { icon: 'event', value: '15/01/2023', description: 'Próximo vencimento', iconColor: 'primary' }
  ];

  goToAddCard() {
  this.router.navigate(['/add-card']);
}
}
