function addOne(x) {
    return x + 1;
}
  
const pipe = (a, ...functions) => {
   const iter = (acc, arr) => {
        if(arr.length === 0){
            return acc;
        }
        acc = arr[0](acc);
        return iter(acc, arr.slice(1));
   }
   return iter(a, functions);
}

pipe(2, addOne, addOne);