const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/search/movie?query=Pokemon&include_adult=false&language=it-IT&primary_release_year=2000&page=1&region=Japan&year=2023';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTNmNzU4ZGM1MjljYTkyYWI2YTQ5MmUxNDNhYmFiNSIsInN1YiI6IjY0NmY2OThiMTEzMGJkMDFlYzk3NzE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OZp-dXgc0JQ48b8rhQzylodvl1qaAK2FOfjsfcWIpXk'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));