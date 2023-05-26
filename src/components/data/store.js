import { reactive } from 'vue'; 
import axios from 'axios';

  
  export const store = reactive({
    loading: true,
    urlApi:"https://api.themoviedb.org/3/search/movie",
    apiKey: "a93f758dc529ca92ab6a492e143abab5",
    queryAPI: "&query=",
    searchMoviesAPI: "https://api.themoviedb.org/3/search/movie?api_key=a93f758dc529ca92ab6a492e143abab5&language=it_IT&query=",
    movies: [],
    searchText: ""
  });