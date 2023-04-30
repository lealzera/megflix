import { useEffect, useState } from "react"
import api from "../../services/api";

// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=858076d7ffa9894e2d796884e183f223&language=pt-BR


const Home = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get('movie/now_playing',{
        params:{
          api_key: '858076d7ffa9894e2d796884e183f223',
          language: 'pt-BR',
          page: 1
        }
      })

      console.log(response.data.results);

    }

    loadFilmes();
 
  }, [])


  return (
    <div>Esta é a Home do projeto</div>
  )
}

export default Home