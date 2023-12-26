import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import './styling/App.css';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
