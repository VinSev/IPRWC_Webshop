export class Product {
  constructor(private _id: number,
              private _name: string,
              private _description: string,
              private _price: number,
              private _imageLink: string) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    this._price = value;
  }


  get imageLink(): string {
    return this._imageLink;
  }

  set imageLink(value: string) {
    this._imageLink = value;
  }
}
