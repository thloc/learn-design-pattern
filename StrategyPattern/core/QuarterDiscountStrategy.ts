import { IPromoteStrategy } from "../dp/IPromoteStrategy";

export default class QuarterDiscountStrategy implements IPromoteStrategy {
  public DoDiscount(price: number): number {
    return price;
  }
}
