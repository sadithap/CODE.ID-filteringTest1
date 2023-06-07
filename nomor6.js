const arr1=[1,2,3];
const arr2=[4,3,2,1];
const arr3=[9];

function plusOneDigit(arr){
    let numericArr=parseInt(arr.join(''));
    numericArr+=1;
    let stringArr=numericArr.toString();
    let result=stringArr.split('').map(Number);
    return result;
}

console.log(plusOneDigit(arr1));
console.log(plusOneDigit(arr2));
console.log(plusOneDigit(arr3));