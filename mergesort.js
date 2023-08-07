function mergesort(arr) {
  console.log("----------mergesort---------------");

  console.log("current arr : " + arr);

  //if element is 0 or 1, no need to sort
  if (arr.length < 2) {
    console.log("arr length is < 2 : " + arr);
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  console.log("mid is " + mid);

  //take frm index 0, total = mid
  const leftArr = arr.slice(0, mid);
  console.log("leftArr : " + leftArr);

  //take frm index=mid and all the rest
  const rightArr = arr.slice(mid);
  console.log("rightArr : " + rightArr);

  return merge(mergesort(leftArr), mergesort(rightArr));
}

function merge(leftArr, rightArr) {
  console.log("----------merge---------------");
  console.log("leftArr : " + leftArr + " | rightArr : " + rightArr);

  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    console.log("in while> leftArr : " + leftArr + " | rightArr : " + rightArr);

    //check which has smaller number
    //take out the first element frm leftArray/rightArr and push to sortedArray
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
      console.log("sortedArr push leftArr : " + sortedArr);
    } else {
      sortedArr.push(rightArr.shift());
      console.log("sortedArr push rightArr : " + sortedArr);
    }
  }

  console.log(
    "sortedArr : " +
      sortedArr +
      " | leftArr : " +
      leftArr +
      " | rightArr : " +
      rightArr
  );

  const resultArr = [...sortedArr, ...leftArr, ...rightArr];
  console.log("resultArr : " + resultArr);
  return resultArr;
}

const arr = [3, 2, -1, 1, -5, 23];
console.log(mergesort(arr));
