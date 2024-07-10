/*
Implement a function setCancellableInterval, that acts like setInterval but instead of returning a timer ID, 
it returns a function that when called, cancels the interval. The setCancellableInterval function should 
have the exact same signature as setInterval:
*/

function setCancellableInterval(callback, delay, ...args) {
  const timer = setInterval(callback, delay, ...args);

  return () => {
    clearInterval(timer);
  };
}
