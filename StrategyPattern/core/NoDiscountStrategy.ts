import { IPromoteStrategy } from "../dp/IPromoteStrategy";

export default class NoDiscountStrategy implements IPromoteStrategy {
  public DoDiscount(price: number): number {
    return price * 0.75;
  }
}

