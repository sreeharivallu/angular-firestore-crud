import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, mystring: string, args?: any): any {

    let returnItem: any;

    if(value.length == 0){
      return value;
    }

    console.log(value);    
    console.log(mystring);
    let resultArray = [];

    return value.filter(item => {
      if(item.includes(mystring)){        
        return item;
      }
    })

  }

}
