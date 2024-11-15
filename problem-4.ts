type Circle = {
    shape : 'circle';
    radius : number;
}

type Rectangle = {
    shape : 'rectangle';
    height : number;
    width : number;
}

const calculateShapeArea = (param : Circle | Rectangle) => {
    if(param.shape === 'circle'){
        return Math.PI * param.radius * param.radius;
    }else if(param.shape === 'rectangle'){
        return param.height * param.width;
    }else{
        return (`wrong input`)
    }
}

const circleArea = calculateShapeArea({shape : 'circle', radius : 5});
const rectangleArea = calculateShapeArea({shape : 'rectangle', height : 4, width : 6});
console.log(circleArea);
console.log(rectangleArea);