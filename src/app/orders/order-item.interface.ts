import {Product} from "../products/product.model";

export class OrderItem {


  constructor(public id: number,
              public name: string,
              public description: string,
              public price: number,
              public imageLink: string,
              public amount: number) {
  }


}
