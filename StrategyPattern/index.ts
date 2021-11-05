import Ticket from "./Ticket";

import HalfDiscountStrategy from "./core/HalfDiscountStrategy";
import NoDiscountStrategy from "./core/NoDiscountStrategy";
import QuarterDiscountStrategy from "./core/QuarterDiscountStrategy";

function main(): void {
  console.log("Start getting tickets!");

  var random = Math.random() * 2;

  for (var i = 1; i <= 4; i++) {
    var ticket = new Ticket();
    ticket.SetName("Ticket " + i);
    ticket.SetPrice(50 * i);
    GeneratePromoteStrategy(random, ticket);
    LogTicketDetails(ticket);

    GeneratePromoteStrategy(random, ticket);
    LogTicketDetails(ticket);
  }
}

function LogTicketDetails(ticket: Ticket): void {
  console.log(
    "Promoted price of " +
    ticket.GetName() +
    " is " +
    ticket.GetPromotedPrice() +
    " " +
    ticket.GetPromoteStrategy()+
    "\n");
}

function GeneratePromoteStrategy(strategyIndex: number, ticket: Ticket): void {
  switch (strategyIndex) {
    case 0:
      ticket.SetPromoteStrategy(new NoDiscountStrategy());
      break;
    case 1:
      ticket.SetPromoteStrategy(new QuarterDiscountStrategy());
      break;
    default:
      ticket.SetPromoteStrategy(new HalfDiscountStrategy());
      break;
  }
}

main();
