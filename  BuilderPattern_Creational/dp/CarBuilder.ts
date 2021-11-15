import Engine from "../core/Engine";
import SeatBelt from "../core/SeatBelt";
import Windscreen from "../core/Windscreen";
import Car from "./Car";

import ICarBuilder from "./ICarBuilder";

export default class CarBuilder implements ICarBuilder {
  private _numberOfWheels: number;
  private _seatBelt: SeatBelt;
  private _color: string;
  private _windscreen: Windscreen;
  private _engine: Engine;

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

  public addEngine(engine: Engine): CarBuilder {
    this._engine = engine;
    return this;
  }

  public addSeatBelts(seatBelt: SeatBelt): CarBuilder {
    this._seatBelt = seatBelt;
    return this;
  }

  public addWheels(numberOfWheels: number): CarBuilder {
    this._numberOfWheels = numberOfWheels;
    return this;
  }

  public addWindscreen(windscreen: Windscreen): CarBuilder {
    this._windscreen = windscreen;
    return this;
  }

  public paint(color: string): CarBuilder {
    this._color = color;
    return this;
  }

  public build(): Car {
    return new Car(this._numberOfWheels, this._seatBelt, this._color, this._windscreen, this._engine);
  }
}