/* Create a sleep function that blocks the execution for given period of time  */
/* duration -> milliseconds */

// synchronous way
function syncSleep(duration) {
  let now = new Date().getTime(); // get current time in miiliseconds
  while (new Date().getTime() < now + duration) {}
}

// asynsynchronous way
function asyncSleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

function main1() {
  console.log("1");
  syncSleep(1000);
  console.log("2");
}

async function main2() {
  console.log("1");
  await asyncSleep(1000);
  console.log("2");
}

main1();
main2();
