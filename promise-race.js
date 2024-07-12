/*
Let's implement our own version of Promise.race(), a promiseRace function, with the difference
being the function takes in an array instead of an iterable.
*/

async function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach((item) => Promise.resolve(item).then(resolve, reject));
  });
}

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Err!");
  }, 400);
});

async function main() {
  try {
    await promiseRace([p1, p2]);
  } catch (err) {
    console.log(err);
  }
}

main();
