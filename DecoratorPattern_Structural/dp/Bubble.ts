import IMilkTea from "../core/IMilkTea";
import MilkTeaDecorator from "../core/MilkTeaDecorator";

export default class Bubble extends MilkTeaDecorator {
  constructor(inner: IMilkTea) {
    super(inner)
  }

  public Cost(): number {
    return 2 + super.Cost();
  }
}
