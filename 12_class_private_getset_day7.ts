//getset과 class private의 대한 예제코드


class Student{
    public name:string;
    private grade : number;
    constructor(name: string, grade: number){
        this.name= name;
        this.grade= grade;
    }
    public get Grade():number {
        return this.grade;//getter

    }
    public set Grade(value:number){
        if(value<1 || value > 5){
            throw new Error('학년은 1~4 사이여야 합니다');
        }
        this.grade =value;
    }
    
}

const student = new Student('손흥민',3);
const grade =student.Grade;
console.log(grade);
student.Grade = 3;
console.log(student.Grade);


//접근제한자 protected

// class HighSchoolStudent extends Student{
//     constructor(name:string,grade:number){
//         super(name,grade);
//     }

//     public printGrade(){
//         //자식클래스는 접근가능
//         console.log(`학년:${this.grade}`);
//     }
//     public printGrade2(){
//         console.log(`학년:${this.greGrade()}`);
//     }
// }
// const s = new HighSchoolStudent('손흥민',1)
// s.grade=2