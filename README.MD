# Description
Angular 2+ currency display format and validation. Input value will automatically be displayed in currency format as you type. <br><br>
You can also define currency symbol and maximum value.

# Installation

To install this library, run:

```bash
$ npm install ng-currency-format --save
```

and then from your Angular Module`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import CurrencyFormatDirective
import { CurrencyFormatDirective } from 'ng-currency-format';

@NgModule({
  declarations: [
    AppComponent,
    // Add CurrencyFormatDirective
    CurrencyFormatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once directive is imported, you can use it in your Angular components:

```xml
<input currencyFormat>
```

#

## Currency Symbol
You can add currency symbol.
```xml
<input 
  currencyFormat
  data-symbol="USD">
```

## Maximum Value Validation
You can define `data-max` value to prevent higher value input than specified value.
```xml
<input 
  currencyFormat
  data-max="250000">
```

#

## License

MIT © [Burak](mailto:burakucakan@gmail.com)
