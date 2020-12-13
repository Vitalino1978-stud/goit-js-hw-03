// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let a = [];
  for (const product of arr) {
    if (prop in product) {
      a.push(product[prop]);

    }
   
  }
  return a;
};
// const getAllPropValues = function (arr, prop) {
//   const arrResult = [];
//   for (const product of products) {
//     console.log(product);
//     for (const obj of Object.keys(product)) {
//       if (obj === prop) {
//         console.log(product[obj]);
//         arrResult.push(product[obj]);
        
//       }
//     }
//     return arrResult;
// }

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []