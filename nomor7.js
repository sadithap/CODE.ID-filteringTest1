const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"];
const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol","Nangka","Timun"];

function compareArrays(arr1,arr2){
    let sameValue=[];
    let differentValue=[];
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i]) && !sameValue.includes(arr1[i])){
            sameValue.push(arr1[i]);
        }
        else if(!arr2.includes(arr1[i])){
            differentValue.push(arr1[i]);
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(!arr1.includes(arr2[i])){
            differentValue.push(arr2[i]);
        }
    }

    return `Same : ${sameValue}\nDifferent : ${differentValue}`;
}

console.log(compareArrays(array1,array2));