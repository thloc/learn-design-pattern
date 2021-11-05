import { IPromoteStrategy } from "../dp/IPromoteStrategy";

export default class HalfDiscountStrategy implements IPromoteStrategy {
  public DoDiscount(price: number): number {
    return price * 0.5;
  }
}
