import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCustomer'
})
export class FilterCustomerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
