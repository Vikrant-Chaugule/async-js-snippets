/*
Implement the Promise.reject() function as promiseReject. 
*/

function promiseReject(reason) {
  return new Promise((_, reject) => reject(reason));
}
