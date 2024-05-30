import Navbar from './Components/Navbar';
import Timeline from './Containers/Timeline';
import SidePanel from './Components/SidePanel';
import CreatePost from './Components/CreatePost';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Footer from './Components/Footer';
import Test from './Test';
import 'tachyons'
import './AppUtils.css'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <div className=''>
      <Navbar/>
      <div className='flex justify-end'>
        <Timeline/>
        <SidePanel/>
      </div>
      <Footer/>
      {/* <Login/>
      <Register/> */}
      {/* <CreatePost/>  */}
      {/* <Test/> */}
    </div>

  

  )
}

export default App
