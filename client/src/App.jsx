import Navbar from './Components/Navbar';
import Timeline from './Containers/Timeline';
import SidePanel from './Components/SidePanel';
import Footer from './Components/Footer';
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
    </div>
  )
}

export default App
