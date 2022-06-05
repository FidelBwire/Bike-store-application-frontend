import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(productName: string): string {
    let reg = new RegExp(/\s-\s2\d{3}/g);
    if(reg.test(productName)) {
      var arr = productName.match(reg) || "";
      var arr2 = productName.split(arr[0]);
      return arr2[0];
    } else return productName;
  }

}
