import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appDateFuture]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateFutureDirective, multi: true}]
})
export class DateFutureDirective implements Validator {

  getUtcDate(date: any) : Date {
    const parts = date.split("T");
    const yParts = parts[0].split('-');
    const tParts = parts[1].split(':');
    return new Date(Date.UTC(yParts[0], yParts[1] - 1, yParts[2], tParts[0], tParts[1], 0));
  }

  isValidAuctionDate(date: string) : boolean {
    return this.getUtcDate(date) > new Date();
  }

  validate(control: AbstractControl): {[key: string]: any} {
    const isValid = control.value && this.isValidAuctionDate(control.value);

    return isValid ? null : {
      'dateFuture': true
    };
  }
}
