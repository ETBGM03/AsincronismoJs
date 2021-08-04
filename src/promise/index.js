const promesa = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      return resolve("Hey, sí es correcto");
    } else {
      return reject("Algo salió mal");
    }
  });
};

promesa()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

const promesa2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        return resolve("Hey, sí es correcto");
      }, 3000);
    } else {
      return reject("Algo salió mal");
    }
  });
};

promesa2()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.all([promesa(), promesa2()])
  .then((response) => {
    console.log(`Array de :`, response);
  })
  .catch((error) => {
    console.log(error);
  });
