let compare = (x, y) => { return x < y }

/**
 * Merge sort accepts parameters including list to be sorted,
 * a function that performs a comparison to determine 
 * order of resulting sub-array elements 
 */
let mergesort = (list, compare) => {
  // Break recursive call
  if (list.length <= 1) return list;

  let { leftHalf, rightHalf } = splitList(list);
  console.log("mergesort - left/right: ", leftHalf, rightHalf);

  /**
   * Recursively call to mergesort passing as parameters the destructured 
   * result of splitting the list and the sub-array comparison function 
   */
  return jointLists(mergesort(leftHalf, compare), mergesort(rightHalf, compare), compare);
}

let splitList = (list) => {
  if (list.length == 0) return { leftHalf : [], rightHalf: [] };
  if (list.length == 1) return { leftHalf : list, rightHalf : [] };
  let index = parseInt(list.length / 2, 10);
  return { leftHalf : list.slice(0, index), rightHalf : list.slice(index) };
}

let jointLists = (leftHalf, rightHalf, compare) => {
  console.log("jointLists - leftHalf/rightHalf: ", leftHalf, rightHalf);

  // Obtain largest array
  var iterator = leftHalf.length > rightHalf.length 
                 ? leftHalf.length 
                 : rightHalf.length;

  // Define auxiliary variables
  var [res, index1, index2] = [[], 0, 0];

  // Sort previously ordered arrays
  while(index1 != leftHalf.length && index2 != rightHalf.length){
    if (compare(leftHalf[index1], rightHalf[index2])) {
      res.push(leftHalf[index1]);
      index1++;
    } else {
      res.push(rightHalf[index2]);
      index2++;
    }
  }

  /**
   * Concatenate onto result array the elements with largest values according
   * to the sub-array compare function 
   */
  if (index1 < leftHalf.length) return res.concat(leftHalf.slice(index1));
  if (index2 < rightHalf.length) return res.concat(rightHalf.slice(index2));
  return res;
}

console.log(mergesort([26, 34, -2, 3 , 5, -6, 1, 35, -10], compare));
