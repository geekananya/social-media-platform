import { auth } from '../../firebaseConfig'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../app/reducers/authReducer';
import { setMobile, setDesktop } from '../../app/reducers/screenReducer';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import google from '../../assets/google.png';
import { combineSlices } from '@reduxjs/toolkit';
// import './Login.css'

const Login = () =>{

    //refs
    const email = useRef(null);
    const password = useRef(null);

    const isMobile = useSelector(state => state.screen.isMobile);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [varr, setVarr] = useState("ananya verma")
    function handle(event){
        setVarr(event.target.value);
        console.log("set")
    }

    // const navigate = useNavigate();
    
    const handleSubmit = async () => {
        try {
            await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
            dispatch(login({userEmail: auth.currentUser.email}));
            setErrorMessage('');
            navigate('/');

        } catch (error) {
            console.log(error)
            setErrorMessage("Invalid Login Credentials!");
        }
    }

    const signInGoogle = async ()=>{
        try{
            await signInWithPopup(auth, new GoogleAuthProvider());
            dispatch(login({userEmail: auth.currentUser.email}));
        } catch(error){
            console.error('Login failed', error);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                dispatch(setMobile());
            } else {
                dispatch(setDesktop());
            }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            //clean on unmount
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className={`${(isMobile? 'login-grid': 'flex')} justify-center items-center vh-100`}>
            <div className={`pa4 ${(isMobile? '': 'w-40')}`}>
                <img src={logo} alt="Logo" className="w-100" />
            </div>
            <div className={`pa4 ${(isMobile? '': 'w-40')} base-color-text1 `}>
                <form onSubmit={(e) => e.preventDefault()} >
                    <h2 className="tc mv2">Sign In</h2>
                    {errorMessage.length>0 ? <p className='tc red light f6 ma0 mb2'>{errorMessage}</p>: <div></div>}
                    <div className='w-75 center'>
                        <div className="mb3">
                        <label className="db">Email</label>
                        <input
                            type="text"
                            className="input-reset ba b--black-20 pa2 mb2 db w-100"
                            ref={email}
                            defaultValue={import.meta.env.VITE_defaultemail}
                            required
                            autoComplete="on"
                            pattern="[^@]*@[^.]*\..*"
                            onChange={handle}
                        />
                        </div>
                        <div className="mb3">
                        <label className="db">Password</label>
                        <input
                            type="password"
                            className="input-reset ba b--black-20 pa2 mb2 db w-100"
                            ref={password}
                            defaultValue={import.meta.env.VITE_defaultpass}
                            required
                            autoComplete="current-password"
                        />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button 
                            onClick={handleSubmit}
                            className="login button f6 ba br-pill ph3 pv2 dib border"
                            >Sign In</button>
                    </div>
                    <p className='tc'>OR</p>
                    <div className='flex justify-center'>
                        <button onClick={signInGoogle} className='google pa2 mb2 border'>
                            <div className='flex items-center'>
                                <img src={google} alt='google-logo' height={'15'} width={'auto'}/>
                                <p className='ma0 ml1'>Continue with Google</p>
                            </div>
                        </button>
                    </div>
                    <hr className='w-50'></hr>
                    <div className='tc sign-up'>
                        Don't have an account? <NavLink to='/register'><p className='red dib underline pointer'>Sign up</p></NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;