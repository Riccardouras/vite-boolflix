import { reactive } from 'vue'; 


  
  export const store = reactive({
    loading: true,
    searchMoviesAPI: "https://api.themoviedb.org/3/search/movie?api_key=a93f758dc529ca92ab6a492e143abab5&language=it_IT&query=",
    searchSeriesApi:"https://api.themoviedb.org/3/search/tv?api_key=a93f758dc529ca92ab6a492e143abab5&language=it_IT&query=",
    movies: [],
    series: [],
    searchText: "",
    UrlImg: "https://image.tmdb.org/t/p/w500/"
  });