import { NgModule } from '@angular/core';
// import { InputPriceLibComponent } from './input-price-lib.component';
import { InputPriceDirective } from './input-format-price.directive';
import { DecimalPipe } from '@angular/common';



@NgModule({
  declarations: [
    // InputPriceLibComponent,
    InputPriceDirective
  ],
  imports: [

  ],
  exports: [
    // InputPriceLibComponent,
    InputPriceDirective
  ],
  providers: [
    DecimalPipe
  ]
})
export class InputPriceLibModule { }
