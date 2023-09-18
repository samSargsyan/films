import { Link } from 'react-router-dom';
import './film.scss';
import { useParams } from 'react-router-dom';

const Film = ({film}) => {

    const {categories} = useParams();
    
    return(
        <Link to={`/${categories}/${film.title}`}>
            <div className='film'>
                <div className='filmPicture' style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500${film.poster_path}")`}}></div>
                <span className='filmTitle'>{film.title}</span>
            </div>
        </Link>
    )
}

export default Film;
