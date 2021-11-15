function q13(arr) {
  const lengthArr = arr.map(it => it.length);
  const set = new Set(lengthArr);
  const results = {};
  for (const s of set) {
    results[s] = arr.filter(it => it.length === s);
  }
  return results
}
console.log(q13(['one', 'two', 'there', 'four']));

function q14() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const correctNumbers = numbers.filter(num => ![5, 2, 3].includes(num));
  console.log(correctNumbers);
}
console.log(q14());