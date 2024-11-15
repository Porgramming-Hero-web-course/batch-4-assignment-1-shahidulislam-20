type Person = {
    name : string;
    age : number;
    email : string;
}

const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) : boolean => {
    const myObj : string[] = Object.keys(obj);
    const findObj : string[] = myObj.filter(element  => keys.includes(element as (keyof T)))
    if(keys.length === findObj.length){
        return true;
    }else{
        return false;
    }
}

const person : Person = {
    name : 'Alice',
    age : 25,
    email : 'alice@example.com'
}

const result6 = validateKeys(person, ['name', 'age'])
console.log(result6);