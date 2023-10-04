import LoginPage from './Components/LoginPage'
import Dashboard from './Containers/Dashboard'
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [logged, setLogged] = useState(false);
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

  const signIn = () => setLogged(true);
  const logout = () => setLogged(false);

  return (
    <div className="App">
      {logged? <Dashboard onLogout={logout} isMobile={isMobile}/>: <LoginPage onSignIn={signIn} isMobile={isMobile}/>}
    </div>
  );
}

export default App;
