const arr1=[1,2,4];
const arr2=[-1,2,5,6,7];

function findTarget(arr,n){
    let result;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===n){
            result=i;
        }
    }

    return result;
}

console.log(findTarget(arr1,4));
console.log(findTarget(arr2,6));