import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRef, useState } from 'react';
import google from '../../assets/google.png';

function Register(props){

  const email = useRef(null);
  const password = useRef(null);
  const cpassword = useRef(null);
  const fname = useRef(null);
  const lname = useRef(null);
  const username = useRef(null);
  
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async () => {
    if(password.current.value !== cpassword.current.value){
      setErrorMessage("ERROR: passwords don't match!");
      return;
    }
    try{
      await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
      setErrorMessage("");
      //Request to server
      const name = fname.current.value + ' ' + lname.current.value;
      fetch("/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name, 
          username: username.current.value,
          email: email.current.value,
        })
      })
      .then(alert("Registered Successfully"))
      .catch(err=>console.log("Caught error while fetching", err))
      //Sign-in user
      props.submit(email.current.value);
    } catch(error){
      setErrorMessage(error.message.substring(10)+'!');
      console.log(error); 
    }
  }

  const signUpGoogle = async ()=>{
    try{
        const userData = await signInWithPopup(auth, new GoogleAuthProvider());
        props.submit(userData.user.email);
    } catch(error){
        console.error('Registration failed', error);
    }
  }

  return(
    <div className={`pa4 ${(props.isMobile? '': 'w-40')} base-color-text1`}>
        <form onSubmit={(e)=>e.preventDefault()}>
          <h2 className="tc mv2">Register</h2>
          {errorMessage.length>0 ? <p className='tc red light f6 ma0 mb2'>{errorMessage}</p>: <div></div>}
          <div className='flex justify-center'>
            <div className="mb3 mh3">
              <label className="db">First Name</label>
              <input
                type="text"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                ref={fname}
                autoComplete='off'
                required
              />
            </div>
            <div className="mb3 mh3">
              <label className="db" >Last Name</label>
              <input
                type="text"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                ref={lname}
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
                pattern="[^@]*@[^.]*\..*"
                required
              />
            </div>
            <div className="mb3 mh3">
              <label className="db">Set Username</label>
              <input
                type="text"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                ref={username}
                autoComplete='off'
                required
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
                  minLength="6"
                  required
              />
            </div>
            <div className="mb3 mh3">
              <label className="db">Confirm Password</label>
              <input
                  type="password"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  ref={cpassword}
                  autoComplete='new-password'
                  required
              />
            </div>
          </div>
          <div className='flex justify-center'>
              <button 
                onClick={onSubmit}
                className="login button f6 ba br-pill border ph3 pv2 dib ">
                Register 
              </button>
          </div>
          <p className='tc'>OR</p>
          <div className='flex justify-center'>
              <button onClick={signUpGoogle} className='google pa2 border mb2'>
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
