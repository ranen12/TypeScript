//interface 객체의타입을 정의한다.

// const person = {name:'손흥민',age:30};
// //이걸 매번 입력해서 쓰긴 힘들다. interface로 한번에 지정이 가능하다

// interface Person{
//     name:string;
//     age:number;
// }
// const person1:Person={name:'손흥민',age:30};
// const person2:Person={name:'손흥민'};
// const persone3:Person={name:'손흥민',age:30,team:'la'};

// interface Movie{
//     title:string,
//     rank:number | string;
// }
// const movie1:Movie = {title:'왕과사는남자',rank:'1'};






//interface 상속
//인터페이스도 상속이 된다

// interface Person{
//     name: string;
//     age:number;

// }

// interface Student extends Person{
//     major:string
// }
// //인터페이스 person은 이름과 나이만 지정된 인터페이스 객체이고
// //student는 학생 객체인데 major값에 person을 상속받아+major값을 덧댄 인터페이스 객체



// const s: Student = {name:'손흥민',age:1,major:'컴공'};
// const s1: Studnet={name:'손흥민',age:2,} //major을 안 넣어서 에러뜸
// const p1:Person={name:'손흥민',age:2}//이거는 person객체라서 이름 나이만 넣어도 된다





//interface-union type
//union type은 앞서 나온 두가지 형을 주는 형태인데 주의사항
//union매개변수 일때 속성이 존재하는지 검사가 필요하다


// interface Person{
//     name: string;
//     age:number;

// }

// interface Student extends Person{
//     major:string
// }

// interface Player extends Person{
//     skill:String;
// }

// function description(p:Student | Player){
//     if('major' in p){//검사가 필요하므로 major가 들어간게 student에 있나 player인가 구분해야함
//         const info = `${p.name},${p.age},${p.major}`;
//     }
// }

// if ('skill' in p) {
// const info = `{p.name}, ${p.age}, ${p.skill}`
// ;
// console.log(info);
// } 
// description(p1)


//interface-intersection
//타입 2개를 합쳐서 사용
// interface Person {
// name: string;
// age: number;
// }
// interface Student extends Person {
// major: string;
// }
// interface Player extends Person {
// skill: string;
// }

// function info(p:Student & Palyer){
//     const result =`${p.name},${p.major},${p.skill}`;
//     console.log(p.name);
// }
// info({name:'손흥민',age:30,major:'컴공',skill:'축구'})


//interface 선언병합
//같은 이름으로 interface를 정의하면 병합됨(원본에 추가 개념인듯?)

// interface Person{
//     name:string;
// }
// interface Person{
//     age:number;
// }

// interface Person{
//     name:string;
//     age:number;
// }


//interface-객체 모델링
interface Maker{
    name:string;
    country: string;

}

interface car{
    model:string;
    maker:Maker;
}


// 전체타입movieinfos
//     articlelist 는 무비랑 같음
//     lastpublishtime
//     morelist
// 개별정보는 movie


interface Movie{
    title: string;
    url: string;
    image:string;
    authoname:string;
    autorImage:string;
    createtirme:string;

}

interface movieinfos{
    articlelist:Movie[];
    lastPublishTime:number;
    moreList:boolean;
}