import Engine from "./core/Engine";
import SeatBelt from "./core/SeatBelt";
import Windscreen from "./core/Windscreen";
import Car from "./dp/Car";
import CarBuilder from "./dp/CarBuilder";

function main() {
  var car = new Car(4,
    new SeatBelt("AAA"),
    "red",
    new Windscreen("2screens"),
    new Engine("Foot"));

  var carByBuilder = new CarBuilder()
    .addWheels(5)
    .addSeatBelts(new SeatBelt("Seat Belt"))
    .addWindscreen(new Windscreen("wind screen"))
    .addEngine(new Engine("Foot"))
    .paint("red")
    .build();

  console.log(car.toString());
  console.log("------------------------------------");
  console.log(carByBuilder.toString());
}

main();
