function highlight(table) {
  let row = table.rows;
  let gender , age , status 
  let object = {
      m: 'male',
      f: 'female',
      true: 'available',
      false: 'unavailable'
  }
  for (let i = 1; i < row.length; i++){
      gender = row[i].children[2];
      age = row[i].children[1];
      status = row[i].children[3];
      gender.parentNode.classList.add(object[gender.innerHTML]);
      if(age.innerHTML < 18) {
        gender.parentNode.setAttribute('style', 'text-decoration: line-through');
      }
      if (status.hasAttribute('data-available')) {
        let data = status.getAttribute('data-available');
        gender.parentNode.classList.add(object[data]);
      } 
      else {
        gender.parentNode.hidden = true;
      }
  }
}
