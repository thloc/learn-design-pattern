import { IPromoteStrategy } from "../core/IPromoteStrategy";

export default class NoDiscountStrategy implements IPromoteStrategy {
  public DoDiscount(price: number): number {
    return price * 0.75;
  }
}

