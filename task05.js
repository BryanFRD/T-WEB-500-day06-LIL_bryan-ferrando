function range(start, end, step = 1){
  var t = [];
  if(start > end){
    for(var i = start; i >= end; i += step){
      t.push(i);
    }
    return t;
  }
  
  for(var i = start; i <= end; i += step){
    t.push(i);
  }
  return t;
}

module.exports = { range };