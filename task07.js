export function arrayFiltering(array, test){
  const t = [];
  for(let i = 0; i < array.length; i++){
    if(test(array[i])){
      t.push(array[i]);
    }
  }
  return t;
}