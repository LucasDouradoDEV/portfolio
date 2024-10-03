import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ButtonPrimaryComponent } from '../../components/button-primary/button-primary.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [
    TitleComponent,
    ButtonPrimaryComponent
  ],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
