// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// let api = "https://rickandmortyapi.com/api/character";

// function fetchData(url, callback) {
//   let xhttp = new XMLHttpRequest();
//   xhttp.open("GET", url, true);
//   xhttp.onreadystatechange = function (event) {
//     if (xhttp.readyState === 4) {
//       if (xhttp.status === 200) {
//         callback(null, JSON.parse(xhttp.responseText));
//       } else {
//         let err = new Error("Error con la peticion" + url);
//         return callback(err, null);
//       }
//     }
//   };
//   xhttp.send();
// }

// fetchData(api, function (err1, data1) {
//   if (err1) return console.log(err1);
//   fetchData(api + data1.results[0].id, function (err2, data2) {
//     if (err2) return console.log(err2);
//     fetchData(data2.origin.url, function (err3, data3) {
//       if (err3) return console.log(err3);
//       console.log(data1.info.count);
//       console.log(data2.name);
//       console.log(data3.dimension);
//     });
//   });
// });

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let api = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        let error = new Error("Error: " + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(api, (error1, data1) => {
  if (error1) return console.error(error1);
  fetchData(api + data1.results[0].id, (error2, data2) => {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
