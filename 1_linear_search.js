//Сложность алгоритма O(n), количество итераций равна длине массива

const array = [1, 4, 2, 6, 8, 4, 2, 1, 7, 10, 13, 61]
let count = 0

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1
    if (array[i] === item) {
      return i
    }
  }
  return null
}

console.log(linearSearch(array, 161))
console.log('count = ', count)
