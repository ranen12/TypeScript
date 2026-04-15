interface Student{
    name: string;
    grade: number;
    major?: string;

}


function studentInfo(s:Student){
    console.log(s.name);
    console.log(s.grade);
    console.log(s.major)
}

studentInfo({name:'손흥민',grade:1,major:'컴공'});
const s1 : Student ={name:'손흥민',grade:2};
studentInfo(s1);
const s2 ={name:'손흥민',grade:1,major:'컴공'};
studentInfo(s2)

const s3 ={name:'손흥민',grade:1,major:1}
// studentInfo(s3); //빨간불 들어온다 major 에 string타입을 했는데 1을 넣엇기 때문에..
