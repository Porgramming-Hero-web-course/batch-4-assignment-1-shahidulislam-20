const getProperty = <T, X extends keyof T>(obj : T , pro : X ) : T[X]  => {
    return obj[pro];
}

const person = {name : 'Alice', age : 30};
const result = getProperty(person, 'name');
console.log(result);