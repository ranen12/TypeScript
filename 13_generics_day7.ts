// function getNumber(value:number):number{
//     return value;
// }

// function getString(value:string):string{
//     return value;
// }

// function getSimple<T>(value:T):T{
//     return value;
// }

// const result = getSimple<number>(1);
// console.log(result);
// const result1 = getSimple<String>('손흥민');
// console.log(result1);
// const result2 = getSimple(true);
// console.log(result2);

// function getBoolean(bool:boolean){
//     return bool;
// }
// function getArray(arr:string[]){
//     return arr;

// }
// //function getArray(arr:Array<string>){}
// //형태로도 쓸 수 있다.

// function getobject(obj:{name:string}){
//     return obj;
// }

// function getValue<T>(value:T):T{
//     return value;
// }
// getValue(true);
// getValue<string[]>(['1']);
// getValue({name:'손흥민'});





//제네릭으로 인터페이스 하기

// interface Box<T,U>{
//     value:T;
//     width:U;

// }

// const numberBox:Box<number,string>={
//     value:10,
//     width:"5"
// };

// const stringBox:Box<string,number>={
//     value:'hello',
//     width:5
// };


// interface ApiResponse<T>{
//     data:T;
//     status:number;
// }

// const res:ApiResponse<String>={
//     data:'success',
//     status:200,
// }

// interface List<T>{
//     items:T[];
// }




//type제한
//length속성이 있는 타입만 허용하겠음

// function printLength<T extends { length:number}>(value:T){
//     console.log(value.length);
// }
// printLength('hello');
// printLength([1,2,3]);
// printLength({length:3,name:'흥민'});
// printLength(123);
//


// //제네릭-type제한
// //특정 타입만 허용하겠음
// function logValue<T extends string | number>(value:T){
//     console.log(value);
// }

// logValue('hi');
// logValue(10);
// logValue(true); //에러남요


// //객체 속성 제한
// function printName<T extends Person>(obj:T){
//     console.log(obj.name);

//     printName({name:'손흥민'});
//     printName({name:'손흥민',age:30});
//     printName({age:30})//에러




//key제한 type
function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}
const user = {name:"손흥민",age:30};

getProperty(user,"name");
getProperty(user,"age");
// getProperty(user,"job"); //에러가 발생함