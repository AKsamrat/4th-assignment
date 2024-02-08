function password(obj) {
  let bYear = obj.birthYear.toString().length;
  if (
    obj.name !== undefined &&
    obj.birthYear !== undefined &&
    obj.siteName !== undefined &&
    bYear === 4
  ) {
    const webName = obj.siteName;
    const toUpperName = webName.charAt(0).toUpperCase() + webName.slice(1);
    return `${toUpperName}#${obj.name}@${obj.birthYear}`;
  } else {
    return 'invalid';
  }
}
console.log(password({ name: 'maisha', birthYear: 200, siteName: 'google' }));
