import { IPromoteStrategy } from "../core/IPromoteStrategy";

export default class HalfDiscountStrategy implements IPromoteStrategy {
  public DoDiscount(price: number): number {
    return price * 0.5;
  }
}
