const arrays = [[1, 4], [11], [3, 5, 7]];

// TODO: compute the value of the arraysSum variable
for(arraysSum of arrays){
   let y = 0
   arraysSum.map(x => {
      y += x
   })
   console.log(y); // Should show 31
}

// const arraysSum = arrays.reduce((acc, value) => acc + value, 0);

// console.log(arraysSum); // Should show 31
