import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './home.css';

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

      setFilmes(response.data.results);

    }

    loadFilmes();
 
  }, [])


  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filmes) => {
          return(
            <article key={filmes.id}>
              <strong>{filmes.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`} alt={`Capa do filme ${filmes.title}`} />
              <Link to={`/filmes/${filmes.id}`}>Acessar filme</Link>
            </article>
          );
        })}
      </div>
    </div>
  )
}

export default Home