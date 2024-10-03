import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manutencao',
  standalone: true,
  imports: [],
  templateUrl: './manutencao.component.html',
  styleUrl: './manutencao.component.scss'
})
export class ManutencaoComponent {

  @Input() text : string = '';
}
