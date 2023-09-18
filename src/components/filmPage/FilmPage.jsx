import { useDispatch, useSelector } from 'react-redux';
import { getFilm, getFilms, selectFilms } from '../../features/film/filmSlice';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import Film from '../film/Film';
import searchIcon from '../../images/searchIcon.png';
import "./filmPage.scss"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FilmPage = () => {

    const films = useSelector(selectFilms);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [value, setValue] = useState('');
    const totalPages = 20;
    const {categories} = useParams();

    const search = (e) => {
        setValue(e.target.value);
        if(value){
            dispatch(getFilm({filmName:value, page: currentPage}))
        }else{
            dispatch(getFilms({type:categories, page: currentPage}))
        }
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        if(value === ""){
            dispatch(getFilms({type:categories, page: currentPage}));
            setCurrentPage(1)
        }else{
            dispatch(getFilm({filmName:value, page: currentPage}))
        }
    },[currentPage])
        
    return(
        <>
            <div className="filmPageHead">
                <div className='searchDiv'>
                    <input type="search" value={value} onChange={search} />
                    <img src={searchIcon} alt="icon" />
                </div>
            </div>
            {films.length ? 
                <div className="filmPage">
                    {
                        films.map((film,i)=>{
                            return <Film key={i} film={film} />
                        })
                    }
                </div>
            :
            ''
            }
            <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
            />
        </>
    )
}

export default FilmPage;