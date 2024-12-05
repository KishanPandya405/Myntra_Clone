import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from 'react-router-dom'
import FetchItems from '../components/Fetchitems'
import { useSelector } from 'react-redux'
import LoadingSpiner from "../components/LoadingSpiner"



function App() {
  
  const fetchStatus = useSelector((store) => store.fetchStatus);


  return ( 
    <>
    <Header/>
    <FetchItems/>
    {fetchStatus.currentlyFetching ? <LoadingSpiner /> : <Outlet />}
    
    <Footer/>
</>
  )
}

export default App
