function deleteInvalids(array) {
  if (Array.isArray(array)) {
    let store = [];
    for (let ele of array) {
      if (typeof ele === 'number') {
        store.push(ele);
      }
    }
    return store.filter(Boolean);
  } else {
    return 'Enter a valid Input';
  }
}
console.log(
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    '12',
    [1, 2],
    { ob: 'lala' },
  ])
);
