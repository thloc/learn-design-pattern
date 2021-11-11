import IMilkTea from "./IMilkTea";

export default class MilkTeaDecorator implements IMilkTea {
  private _milkTea: IMilkTea;

  constructor(inner: IMilkTea) {
    this._milkTea = inner;
  }

  public Cost(): number {
    return this._milkTea.Cost();
  }
}
