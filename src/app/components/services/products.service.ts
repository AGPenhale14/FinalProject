import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  @Output() event = new EventEmitter();

  getProducts() {
    return [
      {
        id: 1,
        name: 'Standard Laneway Clearing',
        description:
          'A quick service of the laneway and sidewalks. Includes Salting. For Residential',
        pictureUrl:
          'https://www.harbourviewpm.com/wp-content/uploads/009SnowRemoval.jpg',
        altPicture: 'SnowBlower and Laneway',
        price: 29.99,
        quantity: 100,
        rate: 4.5,
      },
      {
        id: 2,
        name: 'Parking Lot / commercial Clearing',
        description:
          'Parking Lot or Commercial zone clearing. Salting included. Sidewalks and walkways are not included.',
        pictureUrl:
          'https://idealandscapes.com/wp-content/uploads/2019/03/C-snowplowing-20190227_154743-min.jpg',
        altPicture: 'Truck with plow attachment in snow',
        price: 79.99,
        quantity: 50,
        rate: 3.5,
      },
    ];
  }
}
