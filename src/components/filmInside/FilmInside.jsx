import { useDispatch, useSelector } from 'react-redux';
import './filmInside.scss';
import { filmReducer, selectFilm } from '../../features/film/filmSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FilmInside = () => {

    const dispatch = useDispatch();
    const filmName = useParams("")

    useEffect(()=>{
        dispatch(filmReducer(filmName))
    },[])

    const film = useSelector(selectFilm);

    console.log(film[0]);
    if(!film[0]){
        return <span>Loading...</span>
    }
    return(
        <>
            <div className='filmInsideBack' style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500${film[0].backdrop_path}")`}}></div>
            <div className='filmInside'>
                <div className='filmInsidePic' style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500${film[0].poster_path}")`}}></div>
                <div className='filmInsideDesc'>
                    <h1>{film[0].title}</h1>
                    <p>{film[0].overview}</p>
                    <div className='filmInsideRate'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="#ffc100" role="presentation"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
                        <div className='vote'>
                            <span>{film[0].vote_average}/10</span>
                            <span>{film[0].vote_count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )

}


export default FilmInside;