// import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Works from './pages/works/index'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route path="/hexcamp_task2/works" element={<Works />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
