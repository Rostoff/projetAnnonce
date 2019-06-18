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
    },
    {
        id: 3,
        title: 'Piscine à vendre',
        customer: customersListe[1],
        image: 'assets/image/3.jpg',
        content: 'Pour se mettre bien l\'été',
        localisation: 'Marseille',
        date: '10 juin 2019',
        price: 890,
        details : false
    },
    {
        id: 4,
        title: 'Barbecue à vendre',
        customer: customersListe[0],
        image: 'assets/image/4.jpg',
        content: 'Pour un bon été entre amis',
        localisation: 'Bordeaux',
        date: '9 juin 2019',
        price: 350,
        details : false
    }
]