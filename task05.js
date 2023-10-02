function range(start, end, step = 1){
  const t = [];
  if(start > end){
    for(let i = start; i >= end; i += step){
      t.push(i);
    }
    return t;
  }
  
  for(let i = start; i <= end; i += step){
    t.push(i);
  }
  return t;
}

module.exports = { range };