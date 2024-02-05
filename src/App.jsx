import './App.css'
import AppRoutes from './Routes'
import Navbar from './sections/Navbar'
import { HashRouter as Router } from 'react-router-dom'
function App() {

  return (
    <main>
       <Router>
            <Navbar/> 
            <section>
                <AppRoutes/>
            </section>
       </Router>
    </main>
  )
}

export default App
