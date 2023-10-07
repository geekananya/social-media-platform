import LoginPage from './Components/LoginPage'
import Dashboard from './Containers/Dashboard'
import {useState, useEffect} from 'react';
import './App.css';
import { } from 'firebase/auth';

function App() {

  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({email: ''});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      //clean on unmount
    };
  }, []);

  const signIn = (user) => {setUser(user); setLogged(true);};
  const logout = () => setLogged(false);

  console.log(user);
  return (
    <div className="App">
      {logged? <Dashboard onLogout={logout} isMobile={isMobile} userData = {user}/>: <LoginPage onSignIn={signIn} isMobile={isMobile}/>}
    </div>
  );
}

export default App;



// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase