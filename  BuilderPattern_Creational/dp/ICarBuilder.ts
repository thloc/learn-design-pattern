import Engine from "../core/Engine";
import SeatBelt from "../core/SeatBelt";
import Windscreen from "../core/Windscreen";
import Car from "./Car";
import CarBuilder from "./CarBuilder";

export default interface ICarBuilder {
  addWheels(numberOfWheels: number): CarBuilder;
  addSeatBelts(seatBelt: SeatBelt): CarBuilder;
  paint(color: string): CarBuilder;
  addWindscreen(windscreen: Windscreen): CarBuilder;
  addEngine(engine: Engine): CarBuilder;
  build(): Car;
}
