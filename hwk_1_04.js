//1
function flattenArr (arr) {
  let flatten = [];
  for (let i in arr) {
    flatten.push(arr[i]);
    flatten = flatten.flat()
  }  return flatten
}
console.log(flattenArr([1, [3, 4, [1, 2]], 10]))

//2
function sumOfDigits (num) {
  num += '';
  let arr = [];
  let numSum = 0;
  for (let i = 0; i < num.length; i++) {
    arr.push(num[i])
    }
    numSum = arr.reduce((a,b) => +a + +b,0);
    numSum += ''
    if (numSum.length === 1) {
      return numSum
    } else {
      numSum = sumOfDigits(numSum)
      } return numSum
    }
console.log(sumOfDigits(29))
console.log(sumOfDigits(999999999999))

//3
function arrFloat (arr, n) {
  let newArr = [];
  let splicedArr = [];
  splicedArr = arr.splice(n);
  arr.unshift(splicedArr);
  return arr.flat()
}
console.log(arrFloat([1,2,3,4], 2))

//4 շատ երկար տանջվեցի, բայց չկարողացա գտնել միացնելու ձեւը, միայն տեղերն եմ փոխել
function changedObj (obj) {
  const newObj = {};
  for(let key in obj){
    newObj[obj[key]] = key};
    return newObj
}
console.log(changedObj({ a: '1', b: '2', c: '2', d: '2' }))

//5
function filteredArr (arr) {
  const newArr = arr.filter(status => status.readStatus).sort((a, b) => a.percent - b.percent);
  return newArr
}
console.log(filteredArr([{ book: 'Catcher in the Rye', readStatus: true, percent: 40},
{ book: 'Animal Farm', readStatus: true, percent: 20},
{ book: 'Solaris', readStatus: false, percent: 90 },
{ book: 'The Fall', readStatus: true, percent: 50 },
{ book: 'White Nights', readStatus: false, percent: 60 } ,
{ book: 'After Dark', readStatus: true, percent: 70 }
]))