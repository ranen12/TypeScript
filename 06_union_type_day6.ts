let num:number | string = 10;
num = '10';
console.log(typeof num);

function getAge(age:number | string): string{
    return '저의 나의는'+age;

    console.log(getAge(20));
    console.log(getAge('20'));
}


