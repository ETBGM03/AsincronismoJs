const promesa = require("./../utils/fetchData");
let api = "https://rickandmortyapi.com/api/character/";

promesa(api)
  .then((data) => {
    console.log(data.info.count);
    return promesa(`${api}${data.results[0].id}`);
  })
  .then((data) => {
    console.log(data.name);
    return promesa(data.origin.url);
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((err) => {
    console.log(err);
  });
