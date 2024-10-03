import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../../components/button-primary/button-primary.component';
import { TitleComponent } from "../../components/title/title.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonPrimaryComponent,
    TitleComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
