import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/reducers/authReducer';
import { setPosts, setProfile, setCreatePost } from '../app/reducers/contentReducer';
import { setTag } from '../app/reducers/searchReducer';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import profile from '../assets/icons/profile.svg'
import upload from '../assets/icons/upload.svg'
import searchIcon from '../assets/icons/search.svg'
import logouticon from '../assets/icons/logout.svg'
import './styles.css'

export default function Navbar(){

    const search = useRef(null);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    function handleLogout(){
        dispatch(logout());
        dispatch(setPosts());
    }

    function handleSearch(){
        dispatch(setTag({searchText: search.current.value}));
        dispatch(setPosts());
    }

    return (
        <div className="base-color-text1 base-color-bg flex items-center justify-between nav
                         pa2 pt2 pb2 pr4 mt2 ml2 mr2 br-pill shadow-2">
            <div className='flex align-center w-30'>
                <img src={logo} alt='Connect App' className='ml3 pointer' onClick={()=>{dispatch(setPosts()); dispatch(setTag({searchText: ''}))}}></img>
            </div>
            <div className='flex items-center justify-end w-60'>
                <input
                    type="text"
                    className="input-reset ba b--black-20 pa2 w-60 dib br-pill br--left h-fit"
                    // ref={search}
                    placeholder= "Search Posts by tags.."
                    ref={search}
                    required
                    autoComplete="on"
                />
                <button className='pa0 pl3 pr3 ml0 mr3 ba b--black-20 br-pill br--right search'
                    onClick={handleSearch}>
                    <img src={searchIcon} alt='search' width={30} height={30}></img>
                </button>
                {(isAuthenticated)?
                <>
                    <img src={upload} alt="upload" width={28} height={28} className='ma2 mr3 pointer grow' onClick={()=>dispatch(setCreatePost())}></img>
                    <img src={profile} alt="profile" width={30} height={30} className='ma2 mr3 pointer grow' onClick={()=>dispatch(setProfile())}></img>
                    <img src={logouticon} alt="logout" width={30} height={30} className='ma2 mr3 pointer rotate-180' onClick={handleLogout}></img>
                </>
                : <NavLink to='/login'><button className='button br-pill border pa2 mr3 bg-yellow grow w-100'>Sign In</button></NavLink>
                }
            </div>
        </div>
    )
}