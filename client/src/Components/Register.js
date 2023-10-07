import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { useRef } from 'react';
import google from '../assets/google.png';

function Register(props){

  const email = useRef(null);
  const password = useRef(null);
  const cpassword = useRef(null);
  const fname = useRef(null);
  const lname = useRef(null);
  const username = useRef(null);
  
  const onSubmit = async () => {
    if(password.current.value != cpassword.current.value){
      console.log("ERROR: passwords don't match!");
      return;
    }
    try{
      const res = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
      console.log('User registered successfully:', res.user.uid);
      try{
        await updateProfile(auth.currentUser, {
            displayName: 'ananya',
            username: username.current.value,
        })
      }
      catch(e){
          console.error('Profile update failed', e);
      }
    } catch(error){
      console.error('Registration failed', error);
    }
  }

  const signUpGoogle = async ()=>{
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
    <div className={`pa4 ${(props.isMobile? '': 'w-40')} base-color-text1`}>
        <form onSubmit={(e)=>e.preventDefault()}>
          <h2 className="tc">Register</h2>
            <div className='flex justify-center'>
              <div className="mb3 mh3">
                <label className="db" ref={fname}>First Name</label>
                <input
                  type="text"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  autoComplete='off'
                />
              </div>
              <div className="mb3 mh3">
                <label className="db" ref={lname}>Last Name</label>
                <input
                  type="text"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex justify-center'>
              <div className="mb3 mh3">
                <label className="db">Email</label>
                <input
                  type="email"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  ref={email}
                  autoComplete='email'
                />
              </div>
              <div className="mb3 mh3">
                <label className="db">Set Username</label>
                <input
                  type="text"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  ref={username}
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex justify-center'>
              <div className="mb3 mh3">
                <label className="db">Set Password</label>
                <input
                    type="password"
                    className="input-reset ba b--black-20 pa2 mb2 db w-100"
                    ref={password}
                    autoComplete='new-password'
                />
              </div>
              <div className="mb3 mh3">
                <label className="db">Confirm Password</label>
                <input
                    type="password"
                    className="input-reset ba b--black-20 pa2 mb2 db w-100"
                    ref={cpassword}
                    autoComplete='new-password'
                />
              </div>
            </div>
          <div className='flex justify-center'>
              <button 
                onClick={onSubmit}
                className="login button f6 ba br-pill ph3 pv2 dib ">
                Register 
              </button>
          </div>
          <p className='tc'>OR</p>
          <div className='flex justify-center'>
              <button onClick={signUpGoogle} className='google pa2  mb2'>
                  <div className='flex items-center'>
                      <img src={google} alt='google-logo' height={'15'} width={'auto'}/>
                      <p className='ma0 ml1'>Continue with Google</p>
                  </div>
              </button>
          </div>
          <hr className='w-50'></hr>
          <div className='tc sign-up'>
              Already have an account? <p className='red dib underline pointer' onClick={props.handleMode}>Sign In</p>
          </div>
        </form>
    </div>
  )
}

export default Register;
