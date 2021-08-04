const funASync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Hello");
        }, 3000)
      : reject("Error");
  });
};

const funAsync2 = async () => {
  let algo = await funASync();
  console.log(algo);
};

console.log("antes");
funAsync2();
console.log("despues");

const funAsync3 = async () => {
  try {
    let unaVez = await funASync();
    console.log(unaVez);
  } catch (error) {
    console.log(error);
  }
};

console.log("antes");
funAsync3();
console.log("despues");
