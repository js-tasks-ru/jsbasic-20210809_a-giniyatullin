function camelize(str) {
  let arr = str.split('-').map((item, index) => (index === 0 ? item : item[0].toUpperCase() + item.slice(1)));

  let result = arr.join('');

  return result;
} 
