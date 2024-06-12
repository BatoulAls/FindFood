import './App.css'
import './assets/css/templatemo-style.css'
import './assets/css/all.min.css'
import './assets/css/fonts.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import {Container} from './Components/index.jsx'
import {Header,Footer} from './Sections/index.jsx'
import {Home,Contact} from './Pages/index.jsx'




function App() {


  return (
    <>
    <Router>
    <Container>
	
	 < Header />
	 
     <Routes>
		<Route path="/" element={<Home/>}/>
		<Route path="/Contact" element={<Contact/>} />
	 </Routes>

     <Footer/>	
	</Container>
	</Router>	
	
    </>
  )
}

export default App
