import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../app/reducers/authReducer';
import { setMobile, setDesktop } from '../../app/reducers/screenReducer';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import google from '../../assets/google.png';

function Register(){
  const email = useRef(null);
  const password = useRef(null);
  const cpassword = useRef(null);

  const [errorMessage, setErrorMessage] = useState('');
  const isMobile = useSelector(state => state.screen.isMobile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password.current.value !== cpassword.current.value){
      setErrorMessage("ERROR: passwords don't match!");
      return;
    }
    try{
      const formdata = new FormData(event.target);

      fetch("https://connect-app-backend-7hpt.onrender.com/auth/register", {
        method: 'POST',
        body: formdata,
      })
      .then(async(resp)=>
        {
          if(!resp.ok){
            setErrorMessage("An error occured. Please Try Again.")
            return;
          }
          await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
          setErrorMessage("");
          dispatch(login({userEmail: auth.currentUser.email}))
          navigate('/');
          // navigate to timeline IMPORTSBY
        }
      )
      .catch(err=>console.log("Caught error while fetching", err));

    } catch(error){
      //rollback to delete user from db.
      setErrorMessage(error.message.substring(10)+'!');
      console.log(error); 
    }
  }
  
  const signUpGoogle = async ()=>{
    try{
      const formdata = new FormData();
      formdata.append("name", auth.currentUser.displayName)
      formdata.append("email", auth.currentUser.email)
      formdata.append("location", "")
      formdata.append("image", auth.currentUser.photoURL)

      fetch("https://connect-app-backend-7hpt.onrender.com/register", {
        method: 'POST',
        body: formdata
      })
      .then(async ()=>{
        alert("Registered Successfully")
        await signInWithPopup(auth, new GoogleAuthProvider());
        dispatch(login({userEmail: auth.currentUser.email}))
        navigate('/');
      })
      .catch(err=>console.log("Caught error while fetching", err))
      // navigate to timeline IMPORTANT
    } catch(error){
        console.error('Registration failed', error);
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
      <div className={`pa4 ${(isMobile? '': 'w-40')} base-color-text1`}>
          <form onSubmit={handleSubmit}>
            <h2 className="tc mv4">Register</h2>
            {errorMessage.length>0 ? <p className='tc red light f6 ma0 mb2'>{errorMessage}</p>: <div></div>}
            <div className='flex justify-center'>
              <div className="mb3 mh3">
                <label htmlFor='fname' className="db">First Name</label>
                <input
                  name='fname'
                  type="text"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  autoComplete='off'
                  required
                />
              </div>
              <div className="mb3 mh3">
                <label className="db" >Last Name</label>
                <input
                  name='lname'
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
                  name='email'
                  type="email"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  ref={email}
                  autoComplete='email'
                  pattern="[^@]*@[^.]*\..*"
                  required
                />
              </div>
              <div className="mb3 mh3">
                <label className="db">Location</label>
                <input
                  name='location'
                  type="text"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  autoComplete='off'
                  required
                />
              </div>
            </div>
            <div className='tc mt2 mb3 flex flex-column items-center'>
                <label htmlFor="image" className='db f5 mb3'>Add a profile photo</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className='ml5 w-50 f6'
                    // onChange={handleInputChange}
                    // placeholder="https://example.com"
                />
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
                Already have an account? <NavLink to='/login'><p className='red dib underline pointer'>Sign in</p></NavLink>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Register;
