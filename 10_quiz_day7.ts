// // if(DB.length > oldDBLength)는 db가 추가가 되어 더 커졌다면
// // 성공한것이고 그렇지않다면 실패한것이다 라는 판단으로 성공 실패를 나누기위해
// // 들어간 조건
// const DB:User[] = [];

// interface User{
//     uname:string;
//     email:string
// }


// //db에저장하는 코드 성공실패여부를 가리며 성공한경우push함
// function saveDB(user:User):Promise<User>{
//     const oldDBLength =DB.length; //현 DB의 아이템 갯수를넣어줌
//     DB.push(user); //일단 들어온 유저 정보를 db에 push한것
//     console.log(`${user.uname} 저장 완료되었습니다`);
//     return new Promise((resolve,reject) => {
//         if(DB.length > oldDBLength){
//             resolve(user);
//         } else {
//             reject(new Error('저장 실패!'));
//         }
//     });
// }

// function sendEmail(user:User):Promise<User>{
//     console.log(`${user.email}으로 이메일을 발송했습니다`);
//     return new Promise((resolve)=>{
//         resolve(user);
//     })
// }

// function getResult(user:User):Promise<String>{
//     return new Promise((resolve) => {
//         resolve(`${user.uname}님 등록 성공했습니다`);
        
//     });
// }

// function registerByPromise(user:User):Promise<string>{
//     const result = saveDB(user)//유저 정보가 들어간db를 결과에 저장한다음 메일보내기 결과알리기 등등에 일들을 수행함
//     .then(sendEmail)
//     .then(getResult)
//     .catch((error:Error) => {throw error});
//     return result;
// }



// const myUser:User ={
//     uname:'호날두',
//     email: 'Ho@naver.com'
// }
// const result:Promise<string| Error> =registerByPromise(myUser);
// result.then(console.log);
