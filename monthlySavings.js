function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) && typeof livingCost === 'number') {
    let savings = 0;
    let sum = 0;
    for (let num of arr) {
      if (num >= 3000) {
        sum += num - (num * 20) / 100;
      } else {
        sum += num;
      }
    }

    savings = sum - livingCost;
    if (savings >= 0) {
      return savings;
    } else {
      return `"earn more"`;
    }
  } else {
    return 'invalid input';
  }
}
console.log(monthlySavings(100, [900, 2700, 3400]));
