function sum(insertedArray) {
  if (insertedArray.length === 0) {
    return 0
  }
  // console.log(insertedArray);
  return insertedArray.pop() + sum(array)


}

const array = [1, 2, 3, 4, 5, 6]
sum(array);  // return 21