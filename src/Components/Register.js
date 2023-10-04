import google from '../assets/google.png';

function Register(props){
  return(
    <div className={`pa4 ${(props.isMobile? '': 'w-40')} base-color-text1`}>
        <h2 className="tc">Register</h2>
          <div className='flex justify-center'>
            <div className="mb3 mh3">
              <label className="db">First Name</label>
              <input
                type="text"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
              />
            </div>
            <div className="mb3 mh3">
              <label className="db">Last Name</label>
              <input
                type="text"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <div className="mb3 mh3">
              <label className="db">Email</label>
              <input
                type="email"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
              />
            </div>
            <div className="mb3 mh3">
              <label className="db">Set Username</label>
              <input
                type="text"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <div className="mb3 mh3">
              <label className="db">Set Password</label>
              <input
                  type="password"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
              />
            </div>
            <div className="mb3 mh3">
              <label className="db">Confirm Password</label>
              <input
                  type="password"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
              />
            </div>
          </div>
        <div className='flex justify-center'>
            <button 
              onClick={props.submit}
              className="login button f6 ba br-pill ph3 pv2 dib ">
              Register 
            </button>
        </div>
        <p className='tc'>OR</p>
        <div className='flex justify-center'>
            <button className='google pa2  mb2'>
                <div className='flex items-center'>
                    <img src={google} alt='google-logo' height={'15'} width={'auto'}/>
                    <p onClick={props.submit} className='ma0 ml1'>Continue with Google</p>
                </div>
            </button>
        </div>
        <hr className='w-50'></hr>
        <div className='tc sign-up'>
            Already have an account? <p className='red dib underline pointer' onClick={props.handleMode}>Sign In</p>
        </div>
    </div>
  )
}

export default Register;
