import { DecimalPipe } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';
import { parseToRaw } from './currency-helper';

@Directive({
  selector: '[currencyFormat]',
  providers: [
    DecimalPipe
  ]
})
export class CurrencyFormatDirective implements AfterViewInit {

  private element: HTMLInputElement;
  private symbol = '';
  private max = 0;
  private lastValue = 0;

  constructor(
    private el: ElementRef,
    private decimalPipe: DecimalPipe
  ) { }

  public ngAfterViewInit() {
    this.element = this.el.nativeElement;
    this.symbol = this.element.attributes['data-symbol'] ? this.element.attributes['data-symbol'].value : '';
    this.max = this.element.attributes['data-max'] ? +this.element.attributes['data-max'].value : Number.MAX_VALUE;
  }

  @HostListener('keypress')
  onkeypress() {
    this.lastValue = Number(parseToRaw(this.element.value, this.symbol));
  }

  @HostListener('input')
  oninput() {
    this.element.value = this.element.value.replace(/(?![0-9])./gmi, '');

    if (this.element.value.length > 0) {
      const raw: string = parseToRaw(this.element.value, this.symbol);
      const newValue = (Number(raw) > this.max) ? this.lastValue : raw;
      this.element.value = raw ? this.symbol + ' ' + this.decimalPipe.transform(newValue) : '';
    }
  }

}
