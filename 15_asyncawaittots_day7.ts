interface Movie {
    title:string;
}

interface MovieInfo{
articleList:Movie[];
}

interface RankInfo{
    title:string;
    rank:number;
}



async function fetchMovieData(url:string):Promise<MovieInfo>{
    const response = await fetch(url);
    if(!response.ok){
        throw new Error('요청실패. 상태코드:'+response.status);
    }
    const data:MovieInfo = await response.json()
;
return data;   
}

//2. 데이터 검증
function validateMovieData(data:MovieInfo):void{
    if(!data.articleList || data.articleList.length === 0){
        throw new Error('데이터가 없습니다');
    }
}

function extractMovieInfos(articleList:Array<Movie>):Array<RankInfo>{
    return articleList.map((article,idx)=>({
        title: article.title,
        rank: idx + 1,
    }));
}

function displayMovies(movieInfos:Array<RankInfo>){
    for(const movie of movieInfos){
        console.log(`[${movie.rank}위]${movie.title}`);
        }
}


const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

async function movies():Promise<void> {
    try {
        const data = await fetchMovieData(url);
        validateMovieData(data);
        const movieInfos = extractMovieInfos(data.articleList);
        displayMovies(movieInfos);
        
    } catch (error:unknown) {
        if(error instanceof Error){ 
            console.error('에러발생',error.message);
    }   else{console.error('에러');}
        
    }
}
    movies();