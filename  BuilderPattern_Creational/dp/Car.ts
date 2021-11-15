import Engine from "../core/Engine";
import SeatBelt from "../core/SeatBelt";
import Windscreen from "../core/Windscreen";

export default class Car {
  private _numberOfWheels: number;
  private _seatBelt: SeatBelt;
  private _color: string;
  private _windscreen: Windscreen;
  private _engine: Engine;

  constructor(
    numberOfWheels: number,
    seatBelt: SeatBelt,
    color: string,
    windscreen: Windscreen,
    engine: Engine
  ) {
    this._numberOfWheels = numberOfWheels,
    this._seatBelt = seatBelt,
    this._color = color,
    this._windscreen = windscreen,
    this._engine = engine
  }

  public get numberOfWheels() {
    return this._numberOfWheels;
  }

  public set numberOfWheels(value: number) {
    this._numberOfWheels = value;
  }

  public get seatBelt() {
    return this._seatBelt;
  }

  public set seatBelt(value: SeatBelt) {
    this._seatBelt = value;
  }

  public get color() {
    return this._color;
  }

  public set color(value: string) {
    this._color = value;
  }

  public get windscreen() {
    return this._windscreen;
  }

  public set windscreen(value: Windscreen) {
    this._windscreen = value;
  }


  public get engine() {
    return this._engine;
  }

  public set engine(value: Engine) {
    this._engine = value;
  }

  public toString(): string{
    const content = `
      Number of wheels:    \t ${this.numberOfWheels}\n
      Brand of seat belts: \t ${this.seatBelt.brand}\n
      Color:               \t ${this.color}\n
      Windscreen brand:    \t ${this.windscreen.name}\n
      Engine:              \t ${this.engine.name}
    `;
    return content;
  }
}