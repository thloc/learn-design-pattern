import { IPromoteStrategy } from "../core/IPromoteStrategy";

export default class QuarterDiscountStrategy implements IPromoteStrategy {
  public DoDiscount(price: number): number {
    return price;
  }
}
