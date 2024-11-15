const sumArray = (param : number[]) : number => {
    let sum = 0;
    param.map(num => sum = sum + num);
    return sum;
}

const result = sumArray([1,2,3,4,5]);
console.log(result);