import { Component } from '@angular/core';
import { ManutencaoComponent } from '../../components/manutencao/manutencao.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ManutencaoComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
