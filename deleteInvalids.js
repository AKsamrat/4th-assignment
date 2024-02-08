function deleteInvalids(array) {
  if (Array.isArray(array)) {
    let store = [];
    for (let ele of array) {
      if (typeof ele === 'number' && !isNaN(ele)) {
        store.push(ele);
      }
    }
    return store;
  } else {
    return 'Enter a valid Input';
  }
}
console.log(deleteInvalids({ num: [1, 2, 3] }));
