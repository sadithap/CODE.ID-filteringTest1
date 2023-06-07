const arr1=[2,7,11,15];
const arr2=[3,2,3];
const arr3=[3,2,4];
const arr4=[3,3];

function addSum(arr,n){
    let result=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(j!==i && arr[i]+arr[j]===n){
                result.push(i,j);
                return result;
            }
        }
    }
    return result;
}

console.log(addSum(arr1,9));
console.log(addSum(arr2,6));
console.log(addSum(arr3,6));
console.log(addSum(arr4,6));