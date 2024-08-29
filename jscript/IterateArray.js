const nums = [1, 2, 3, 4, 5];
// for (i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

nums.forEach(printArray);
console.log(nums.length);

function printArray(element) {
  console.log(element);
}