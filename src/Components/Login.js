import google from '../assets/google.png';
import './Login.css'

const Login = () =>{
    return(
        <div className="w-40 pa4 base-color-text1">
            <h2 className="tc">Sign In</h2>
            <div className="mb3">
            <label className="db">Username</label>
            <input
                type="text"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
            />
            </div>
            <div className="mb3">
            <label className="db">Password</label>
            <input
                type="password"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
            />
            </div>
            <div className='flex justify-center'>
                <button className="login button f6 ba br-pill ph3 pv2 dib ">Sign In</button>
            </div>
            <p className='tc'>OR</p>
            <div className='flex justify-center'>
                <button className='google pa2  mb2'>
                    <div className='flex items-center'>
                        <img src={google} alt='google-logo' height={'15'} width={'auto'}/>
                        <p className='ma0 ml1'>Continue with Google</p>
                    </div>
                </button>
            </div>
            <hr className='w-50'></hr>
            <div className='tc sign-up'>
                Don't have an account? <a href='' className='red'>Sign up</a>
            </div>
        </div>
    )
}

export default Login;