import LoginPage from './Components/LoginPage/LoginPage'
import Dashboard from './Containers/Dashboard'
import {useState, useEffect} from 'react';
import './App.css';
import Guest from './Components/Guest';

function App() {

  const [logged, setLogged] = useState(false);
  const [guest, setGuest] = useState(true);
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
  const logGuest = () => setGuest(false);
  const logout = () => setLogged(false);

  return (
    <div className="App">
      {logged? <Dashboard onLogout={logout} isMobile={isMobile} email={user} />:
      (guest)? <Guest handleSignin={logGuest}/>: <LoginPage onSignIn={signIn} isMobile={isMobile}/>}
      
    </div>
  );
}

export default App;