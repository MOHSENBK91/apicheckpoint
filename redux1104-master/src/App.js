
import './App.css';
import NavBar from './components/ui/NavBar/NavBar'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profiles'
import {Routes,Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {getUsers} from './redux/action'
import {useEffect} from 'react'

function App() { 
  const Dispatch = useDispatch()
  // const getUsers = async () => {
    
  //   try {
  //    const users = await Axios.get('https://jsonplaceholder.typicode.com/users/1')
  //    console.log(users)
  //   } catch (error) {
  //    console.log(error)
 
  //   }
  //  }
  useEffect(() => {
   Dispatch( getUsers())
  }, [])
  
  
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Profile/:id' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
