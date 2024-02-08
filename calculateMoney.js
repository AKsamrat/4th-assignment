function calculateMoney(ticketSale) {
  if (ticketSale >= 0) {
    let savings = ticketSale * 120 - (500 + 8 * 50);
    return savings;
  } else {
    return 'please enter your valid ticket sales number';
  }
}
console.log(calculateMoney(-130));
