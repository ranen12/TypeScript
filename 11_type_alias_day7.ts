type PersonName =string;
//personName이라는 별칭을 만들어주었다.

let name:string='신호탄';
//신호탄은 사람이름이지만 사람이름인지 알기 쉽지않다 let name을 하면 의미론적으로
//구분이 어렵다

let name1:PersonName ='국기봉';

//이경우 PersonName이라는 의미론적인 설명을 지정해주었고 그것은 String이다

function printAge(num:string|number){
    console.log(num);
}

type Age =string | number;
function printAge1(num:Age){

    console.log(num)

}