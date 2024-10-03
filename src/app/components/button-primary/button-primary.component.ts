import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = "btn_primary" |  "btn_secondary";

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "btn_primary";
  @Output("submit") onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit()
  }
}
