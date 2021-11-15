export default class SeatBelt {
  private _brand: string;

  constructor(brand: string) {
    this._brand = brand;
  }

  get brand(): string {
    return this._brand;
  }
  
  set brand(value: string) {
    this._brand = value;
  }
}
