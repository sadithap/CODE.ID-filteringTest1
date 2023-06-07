const arr1=[2,3,4,5,6,7,8,9,1,10];

function minMaxArray(arr){
    arr.sort((a, b) => a - b);
    return `Min : ${arr[0]}\nMax : ${arr[arr.length-1]}`
}

console.log(minMaxArray(arr1));