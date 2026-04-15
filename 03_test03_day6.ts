// function add(num1:number, num2:number):number{

//     return num1 + num2;

// }
// const result = add(5,4);
// const result1 = add('1','2');
// const result2: string =  add(4,5);//
// const result3:number=add(4);


function sayHello(name:string):string{
return `hello ${name}`

}

let greeting = sayHello('RM');
console.log(greeting);

function sayHi(name:string):void{
    console.log(`hi ${name}`);
}

const hi = sayHi('손흥민');
console.log(hi);