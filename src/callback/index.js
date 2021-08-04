function suma(n1, n2) {
  return n1 + n2;
}

function cal(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(cal(1, 2, suma));

function date(callback) {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 2000);
}
function imprimir(date) {
  console.log(date);
}

date(imprimir);
