export class Product {
  constructor(public name: string,
              public description: string,
              public price: number,
              public imageLink: string,
              public id?: number) {
  }
}
