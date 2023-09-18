import './header.scss';
import Logo from "../../images/Logo.png";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilms } from '../../features/film/filmSlice';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {

  const [value, setValue] = useState("popular");
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const menuToggle = () => {
    setToggle(prev=>!prev);
    setIsOpen(false);
  }

  useEffect(()=>{
      dispatch(getFilms({type:value, page: 1}));
  },[value])

  //petqa categoryn sarqel dynamic

  return(
    <OutsideClickHandler onOutsideClick={() =>{setToggle(false);setIsOpen(false)}}>
      <section className="top-nav header">
        <div>
          <Link to="films/popular" onClick={()=>setToggle(false)}><img src={Logo} alt="Logo" /></Link>
        </div>
        <input id="menu-toggle" type="checkbox" checked={toggle} onClick={menuToggle} />
        <label className='menu-button-container' htmlFor="menu-toggle">
          <div className='menu-button'></div>
        </label>
        <ul className="menu">
          <li><Link to="films/popular" onClick={()=>setToggle(false)}>Home</Link></li>
          <li className='menuTitle' onClick={()=>setIsOpen(prev=>!prev)}>Categories</li>
          {isOpen ? 
          <ul className='dropdownMenu'>
            <li onClick={() => setValue('now_playing')}><Link to="films/now_playing" onClick={()=>menuToggle()}>Now Playing</Link></li>
            <li onClick={() => setValue('popular')}><Link to="films/popular" onClick={()=>menuToggle()}>Popular</Link></li>
            <li onClick={() => setValue('top_rated')}><Link to="films/top_rated" onClick={()=>menuToggle()}>Top Rated</Link></li>
            <li onClick={() => setValue('upcoming')}><Link to="films/upcoming" onClick={()=>menuToggle()}>Upcoming</Link></li>
          </ul>
          :
          ''
          }
          <li className='menuTitle'><Link to="/about" onClick={()=>setToggle(false)}>About</Link></li>
        </ul>
      </section>
    </OutsideClickHandler>
  )

}


export default Header;