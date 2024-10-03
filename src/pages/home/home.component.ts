import { Component } from '@angular/core';
import { ManutencaoComponent } from "../../components/manutencao/manutencao.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ManutencaoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
