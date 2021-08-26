function namify(users) {
  let names=[];
  for (let i=0; i<users.length;i++){
    for(let key in users[i]){
      let tmp = users[i];
      if(key === 'name'){
        names.push(tmp[key]);
      }
    }
  }
  return names;
}
