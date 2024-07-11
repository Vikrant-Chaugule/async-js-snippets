/*
Implement a function setCancellableTimeout, that acts like setTimeout but instead of returning a timer ID, 
it returns a function that when called, cancels the pending callback function. 
*/

function setCancellableTimeout(callback, delay, ...args) {
  const timer = setTimeout(callback, delay, ...args);

  return () => {
    clearTimeout(timer);
  };
}

let i = 0;
// t = 0:
const cancel = setCancellableTimeout(() => {
  i++;
}, 100);
// t = 50:
cancel();
console.log(i);
