import IMilkTea from "../core/IMilkTea";
import MilkTeaDecorator from "../core/MilkTeaDecorator";

export default class FruitPudding extends MilkTeaDecorator {
  constructor(inner: IMilkTea) {
    super(inner)
  }

  public Cost(): number {
    return 5 + super.Cost();
  }
}
