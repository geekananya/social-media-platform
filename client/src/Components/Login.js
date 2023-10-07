import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRef } from 'react';
import google from '../assets/google.png';
import './Login.css'

const Login = (props) =>{

    const email = useRef(null);
    const password = useRef(null);
    
    const onSubmit = async () => {
        try {
            const userData = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
            console.log('User signed in successfully');
            console.log(userData.user);
            props.submit(userData.user.email);
        } catch (error) {
            console.error('Sign in failed', error);
        }
    }

    const signInGoogle = async ()=>{
        console.log("google clicked")
        try{
            const userData = await signInWithPopup(auth, new GoogleAuthProvider());
            props.submit(userData.user.email);
        } catch(error){
            console.error('Registration failed', error);
            console.log("credential from error", GoogleAuthProvider.credentialFromError(error));
        }
    }

    return(
        <div className={`pa4 ${(props.isMobile? '': 'w-40')} base-color-text1 `}>
            <form onSubmit={(e) => e.preventDefault()} >
                <h2 className="tc mt2">Sign In</h2>
                <div className='w-75 center'>
                    <div className="mb3">
                    <label className="db">Email</label>
                    <input
                        type="text"
                        className="input-reset ba b--black-20 pa2 mb2 db w-100"
                        ref={email}
                        required
                        autoComplete="off"
                    />
                    </div>
                    <div className="mb3">
                    <label className="db">Password</label>
                    <input
                        type="password"
                        className="input-reset ba b--black-20 pa2 mb2 db w-100"
                        ref={password}
                        required
                        autoComplete="current-password"
                    />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button 
                        onClick={onSubmit}
                        className="login button f6 ba br-pill ph3 pv2 dib"
                        >Sign In</button>
                </div>
                <p className='tc'>OR</p>
                <div className='flex justify-center'>
                    <button onClick={signInGoogle} className='google pa2  mb2'>
                        <div className='flex items-center'>
                            <img src={google} alt='google-logo' height={'15'} width={'auto'}/>
                            <p className='ma0 ml1'>Continue with Google</p>
                        </div>
                    </button>
                </div>
                <hr className='w-50'></hr>
                <div className='tc sign-up'>
                    Don't have an account? <p className='red dib underline pointer' onClick={props.handleMode} >Sign up</p>
                </div>
            </form>
        </div>
    )
}

export default Login;