const promesaAsyn = require("./../utils/fetchData");
let api = "https://rickandmortyapi.com/api/character/";

const another = async (api2) => {
  try {
    let data = await promesaAsyn(api2);
    let person = await promesaAsyn(`${api}${data.results[0].id}`);
    let origin = await promesaAsyn(person.origin.url);
    console.log(data.info.count);
    console.log(person.name);
    console.log(origin.dimension);
  } catch (error) {
    console.log(error);
  }
};

console.log("antes");
another(api);
console.log("despues");
