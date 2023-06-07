function triangle(n){
    let result='';
    let count=0;
    for(let i=0;i<7;i++){
        count=n;
        for(let j=0;j<=i;j++){
            result+=`${count} `;
            count++;
        }
        result+=`\n`;
        n++
    }

    return result;
}

console.log(triangle(1));
console.log(triangle(5));