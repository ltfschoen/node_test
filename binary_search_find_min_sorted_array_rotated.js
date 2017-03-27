/**
 * Given a sorted array as input (ascending order only
 * and without duplicates) that may be rotated
 * and return the minimum value.
 */

let getMin = (x, y) => { return x <= y ? x : y; }
let getMid = (l, h) => { return parseInt((l + h)/2, 10); }

/** 
 * Base case of divide and conquer constrains search 
 * to unsorted sub-array housing the minimum value, 
 * and iteratively selects and processes the next sub-array
 * until return answer
 */
let findMin = (arr, l, h) => {
  while (arr[l] > arr[h]) {
    let mid = getMid(l, h);
    if (arr[mid] > arr[h]) { l = mid + 1 };
    if (arr[mid] <= arr[h]) { h = mid };
  }
  return arr[l];
}

/**
 * Call algorithm with sorted and rotated array,
 * and its lower and upper indexes as arguments
 */
let input = [2,3,4,-2,-1,0,1], 
    l = 0, 
    h = input.length - 1,
    output = findMin(input, l, h);
console.log(output);