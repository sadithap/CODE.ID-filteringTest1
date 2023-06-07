const arr1=['asep','budi','-','budi','asep'];
const arr2=['Tom','tim','tim','tom'];
const arr3=['tik','tok','toko','tik'];

function isPalindrome(arr){
    let lowerArr=arr.map(value => value.toLowerCase());
    
    for(let i=0;i<lowerArr.length;i++){
        if(lowerArr[i]!==lowerArr[lowerArr.length-1-i]){
            return false;
        }
    }

    return true;
}

console.log(isPalindrome(arr1));
console.log(isPalindrome(arr2));
console.log(isPalindrome(arr3));