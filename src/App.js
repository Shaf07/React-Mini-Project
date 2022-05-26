import logo from './logo.svg';
import './CSS/App.css';
import Navbar from "./Components/Routing/Navbar"
import FishForm from "./Components/Array-Objects/FishForm"
import AllFish from './Components/Routing/AllFish';
import AddFish from './Components/Routing/AddFish'
import SearchFish from './Components/Routing/SearchFish'
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import Home from './Components/Routing/Home';
import FishRepo from './Components/Components/FishRepo';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<FishRepo />} />
          <Route path="/home" element={<Home />} />
          <Route path="/all" element={<AllFish />} />
          <Route path="/add" element={<AddFish />} />
          <Route path="/search" element={<SearchFish />} />

        </Routes>
    </Router>
  );
}

export default App;
