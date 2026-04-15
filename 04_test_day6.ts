function sayHello(name:string):string{
    return `Hello ${name}`;
}

function greeting(name:string, callback:(name:string)=>string):string{
        return callback(name);
}


const result = greeting('손흥민',sayHello);
const result1 = greeting('이강인',(name:string)=>`Hello${name}`);
console.log(result,result1);
