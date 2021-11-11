import IMilkTea from "../core/IMilkTea";
import MilkTeaDecorator from "../core/MilkTeaDecorator";

export default class BlackSugar extends MilkTeaDecorator {
  constructor(inner: IMilkTea) {
    super(inner)
  }

  public Cost(): number {
    return super.Cost();
  }
}
