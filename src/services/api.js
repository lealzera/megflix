import axios from "axios";

//BASE DA URL: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=858076d7ffa9894e2d796884e183f223&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;