interface Movie{

}

interface MovieInfo{

}

interface RankInfo{

    
}

async function fetchMovieData(url){
    const response = await fetch(url);
    if(!response.ok){//fetch로통신했음 응답이있지 않다면
        throw new Error('요청실패. 상태코드:'+response.status);
    }
    const data = await response.json();
    return data;
}

function validateMovieData(data){
    if(!data.articleList || data.articleList.length ===0){
        throw new Error('데이터가 없습니다');
    }
}

function extractMovieInfos



const url ='http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

async function movies(){
    try{
        const data = await fetchMovieData(url);
        validateMovieData(data);//data가 비지않았는지 검증 
        const movieInfos = extractMovieInfos(data.articleList);//data라는 가져온 값에 articleList 데이터를 가져간다
    }

}




movies();