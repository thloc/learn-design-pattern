import { IPromoteStrategy } from "./dp/IPromoteStrategy";

export default class Ticket {
  private _promoteStrategy: IPromoteStrategy;
  private _price: number;
  private _name: string;

  constructor(promoteStrategy?: IPromoteStrategy) {
    this._promoteStrategy = promoteStrategy;
  }

  public GetPrice(): number {
    return this._price;
  }

  public SetPrice(value: number): void {
    this._price = value;
  }

  public GetName(): string {
    return this._name;
  }

  public SetName(value: string): void {
    this._name = value;
  }

  public GetPromoteStrategy(): IPromoteStrategy {
    return this._promoteStrategy;
  }

  public SetPromoteStrategy(value: IPromoteStrategy): void {
    this._promoteStrategy = value;
  }

  public GetPromotedPrice(): number {
      return this._promoteStrategy.DoDiscount(this._price); 
  }
}
