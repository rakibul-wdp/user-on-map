import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MapContainer from "./components/MapContainer";
import MapModel from './components/MapModel';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h3>MapCube</h3>
        </header>
        <Routes>
          <Route path="/" element={<MapContainer />} />
          <Route path="/3dContainer/:lat/:lng/:zoom" element={<MapModel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
