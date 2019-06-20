import { Pipe, PipeTransform } from '@angular/core';
import { Annonce } from './annonce';

@Pipe({
  name: 'filterByTitle'
})

export class FilterPipe implements PipeTransform {
  transform(items: Annonce[], searchText: string): any[] {
    // S'il n'y a pas d'items on ne renvoie rien
    if (!items) {return []; }
    // S'il n'y a pas de searchText pour trier a.k.a. pas de texte dans le champ recherche, on renvoie tous les items
    else if (!searchText) {return items; } else {
      // Sinon on récupère les items dont le titres contiennent la valeur du texte searchText dans leur titre
      let annoncesFiltrees: Annonce[] = [];

      for (let i in items){
        if (items[i].title.toLowerCase().includes(searchText.toLowerCase())) {
          annoncesFiltrees.push(items[i]);
        }
      }
    return annoncesFiltrees;
    }
   }
}