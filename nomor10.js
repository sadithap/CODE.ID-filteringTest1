const arr1=[4,7,1,20];
const arr2=[3,5,2];
const arr3=[2,14,10,1,11,12,3,4];

function sisip(arr,n){
    arr.sort((a,b) => a-b);
    if(arr[arr.length-1]<=n){
        arr.push(n);
        return arr;
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]>=n){
            arr.splice(i,0,n);
            break;
        }
    }

    return arr;
}

console.log(sisip(arr1,9));
console.log(sisip(arr2,7));
console.log(sisip(arr3,7));