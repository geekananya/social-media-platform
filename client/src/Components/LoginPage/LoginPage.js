import Logo from './Logo';
import Login from './Login';
import Register from './Register';
import {useState} from 'react';

const LoginPage = (props) => {
  
  const [route, setRoute] = useState('login');

  const toggleAccessMode = () =>{
    setRoute((route==='login')?'register':'login');
  }  

  function submitform(user){
    props.onSignIn(user);
  }

  return (
    <div className={`${(props.isMobile? 'login-grid': 'flex')} justify-center items-center vh-100`}>
      <Logo isMobile={props.isMobile}/>
      {(route==='login')? 
        <Login isMobile={props.isMobile} handleMode={toggleAccessMode} submit={submitform} />:
        <Register isMobile={props.isMobile} handleMode={toggleAccessMode} submit={submitform}/>}
    </div>
  );
}

export default LoginPage;
