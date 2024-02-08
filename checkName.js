function checkName(name) {
  if (typeof name === 'string') {
    let inputToLower = name.toLowerCase();
    let inputName = inputToLower[inputToLower.length - 1];

    const checkStr = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    let store = '';
    let count;
    for (let alpha = 0; alpha < checkStr.length; alpha++) {
      store = checkStr[alpha].toLowerCase();
      if (inputName.includes(store)) {
        count = 1;
        break;
      } else {
        count = 0;
      }
    }
    if (count === 1) {
      return 'Good Name';
    } else {
      return 'Bad Name';
    }
  } else {
    return 'invalid';
  }
}
console.log(checkName('Salmana'));
