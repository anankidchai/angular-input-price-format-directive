# Input Price Format Directive

Transforms input to a currency string(with 2 digits).

## Install

```
npm install ng-input-price-format --save
```

## Usage


Add ```InputPriceFormatModule``` to your module's ```imports```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { InputPriceFormatModule } from 'ng-input-price-format';

@NgModule({
  imports: [
      BrowserModule, 
      InputPriceFormatModule
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```

And then use 'inputPrice' directive it in your input tag component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
  <input inputPrice [(ngModel)]="exampleNumber" />
  `
})
export class AppComponent {
  exampleNumber = 2000;
}
```


## License

[MIT](https://tldrlegal.com/license/mit-license) 
