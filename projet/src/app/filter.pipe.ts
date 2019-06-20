import { Pipe, PipeTransform } from '@angular/core';
import { Annonce } from './annonce';

@Pipe({
  name: 'filterByTitle'
})

export class FilterPipe implements PipeTransform {
  transform(items: Annonce[], searchText: string): any[] {
    if (!items) {return []; }
    else if (!searchText) {return items; } else {

      let annoncesFiltrees: Annonce[] = [];

      for (let i in items){
        if (items[i].title.includes(searchText)) {
          annoncesFiltrees.push(items[i]);
        }
      }
    return annoncesFiltrees;
    }
   }
}