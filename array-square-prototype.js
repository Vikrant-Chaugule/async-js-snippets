/* 
Implement a custom Array function, Array.prototype.square() which creates a new array with the results of 
squaring every element within the array the .square() method is called on.
*/

Array.prototype.square = function () {
  return this.map((ele) => ele * ele);
};

const result = [1, 2, 3].square();
console.log(result);
