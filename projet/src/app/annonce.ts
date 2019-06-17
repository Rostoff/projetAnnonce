import { Moment } from 'moment';

export class Annonce {
    id: number;
    title: string;
    customerName: string;
    image?: string;
    content: string;
    localisation: string; //dans une V2, localisation par adresse
    date: string; //Dans un V2, utiliser Moment.js
    price: number;
    details: boolean;
}
