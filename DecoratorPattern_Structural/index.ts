import MilkTea from "./core/MilkTea";
import BlackSugar from "./dp/BlackSugar";
import Bubble from "./dp/Bubble";
import EggPudding from "./dp/EggPudding";
import FruitPudding from "./dp/FruitPudding";
import WhiteBubble from "./dp/WhiteBubble";

function main() {
  var firstMilkTea = new EggPudding(
    new FruitPudding(
        new BlackSugar(
            new Bubble(
                new MilkTea()))));

  console.log("EggPuddingAndFruitPuddingBlackSugarBubbleMilkTea:\t"
    + firstMilkTea.Cost());


  var secondMilkTea = new EggPudding(
    new BlackSugar(
        new WhiteBubble(
            new MilkTea())));

  console.log("EggPuddingBlackSugarWhiteBubbleMilkTea:\t"
    + secondMilkTea.Cost());
}

main();
