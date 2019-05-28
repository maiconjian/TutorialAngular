import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;
  @Input() cor = 'gray';

  constructor(
  ) {}


  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
  }
  @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent';
  }
}
