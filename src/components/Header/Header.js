import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <Link className='logo' to="/" >MEG FLIX</Link>
        <Link className='favoritos' to="/favoritos" >Meus filmes</Link>
    </header>
  )
}

export default Header