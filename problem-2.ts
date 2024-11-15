const removeDuplicates = (param : number[]) : number[] => {
    // return Array.from(new Set(param));
    let newArray : number[] = [];
    param.map(num => {
        if(newArray.includes(num)){
            return;
        }else{
            newArray.push(num);
        }
    })
    return newArray;
}

const result = removeDuplicates([1,2,2,3,4,4,5]);
console.log(result);