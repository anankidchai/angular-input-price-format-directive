import { Directive, HostListener, OnInit, ElementRef } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[inputPrice]'
})
export class InputPriceDirective implements OnInit {

  isEleFocus = false;

  constructor(
    private _DecimalPipe: DecimalPipe,
    private _el: ElementRef,
    private ngControl: NgControl
  ) {
    _el.nativeElement.style.textAlign = 'right';
    _el.nativeElement.style.paddingRight = '4px';
  }

  public ngOnInit(): void {
    // This for initial: init form before pathchValue
    if (this.ngControl && this.ngControl.control) {
      this.ngControl.control.valueChanges.subscribe(e => {
        if (!this.isEleFocus) {
          let map = this._el.nativeElement.value;
          if (typeof map === 'string') {
            map = +(this._el.nativeElement.value.replace(/,/g, ''));
          }
          if (map) {
            this._el.nativeElement.value = (this._DecimalPipe.transform(map, '1.2-2'));
          }
        }
      });
    }

    // This for initial: pathchValue before init form
    if (this.ngControl && this.ngControl.value) {
      let map = this.ngControl.value;
      if (typeof map === 'string') {
        map = +(this._el.nativeElement.value.replace(/,/g, ''));
      }
      if (map) {
        this._el.nativeElement.value = (this._DecimalPipe.transform(map, '1.2-2'));
      }
    }

  }


  @HostListener("input", ["$event.target.value"])
  onInput(value) {
    if (this._el.nativeElement.value != null) {
      const re = /[^0-9.]/g;
      re.test(this._el.nativeElement.value);
      // this.ctrl.setValue(this._el.nativeElement.value.replace(re, ''));
      this._el.nativeElement.value = this._el.nativeElement.value.replace(re, '');
    }
  }


  @HostListener("focus")
  onFocus() {
    this.isEleFocus = true;

    if (this._el.nativeElement.value != null) {
      if (typeof this._el.nativeElement.value === 'string') {
        this._el.nativeElement.value = this._el.nativeElement.value.replace(/,/g, '');
      }
      if (typeof this._el.nativeElement.value === 'number') {
        this._el.nativeElement.value = this._DecimalPipe.transform(this._el.nativeElement.value, '1.2-2');
      }
    }
  }

  @HostListener("blur")
  onBlur() {
    this.isEleFocus = false;

    if (this._el.nativeElement.value) {
      if (typeof this._el.nativeElement.value === 'string') {
        this.ngControl.control.setValue(+(this._el.nativeElement.value.replace(/,/g, '')));
        // this._el.nativeElement.value = +(this._el.nativeElement.value.replace(/,/g, ''));
        this._el.nativeElement.value = (this._DecimalPipe.transform(+(this._el.nativeElement.value.replace(/,/g, '')), '1.2-2'));
      } else {
        this._el.nativeElement.value = (this._DecimalPipe.transform(this._el.nativeElement.value, '1.2-2'));
      }

    }

  }


}
