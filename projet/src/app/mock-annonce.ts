import { Annonce } from './annonce';
import { Moment } from 'moment';
import { customersListe } from './mock-customers';


export const AnnonceList: Annonce[] = [
    {
        id: 1,
        title: 'Ordinateur à vendre',
        //customerName: 'Billy Bob',
        customer: customersListe[0],
        image: 'assets/image/1.jpg',
        content: 'C\'est génial',
        localisation: 'Paris',
        date: '17 juin 2019',
        price: 1500,
        details: false
    },
    {
        id: 2,
        title: 'Ventilateur à vendre',
        //customerName: 'John Snow',
        customer: customersListe[1],
        image: 'assets/image/2.jpg',
        content: 'ça rafraichi',
        localisation: 'Paris',
        date: '15 juin 2019',
        price: 100,
        details : false
    }

]