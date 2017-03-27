let getMin = (x, y) => { return x <= y ? x : y; }
let getMid = (l, h) => { return parseInt((l + h)/2, 10); }

let findMin = (arr, l, h) => {
  // constrain search to unsorted sub-array containing min value
  while (arr[l] > arr[h]) {
    let mid = getMid(l, h);
    // choose next sub-array
    if (arr[mid] > arr[h]) { l = mid + 1 };
    if (arr[mid] <= arr[h]) { h = mid };
  }
  // answer
  return arr[l];
}

/**
 *  given a sorted array as input (incrementing order only
 *  and without duplicates) that may be rotated
 *  and return the minimum value.
 */
let input = [2,3,4,-2,-1,0,1], // input
    l = 0, // lower index
    h = input.length - 1, // upper index
    output = findMin(input, l, h);
console.log(output);