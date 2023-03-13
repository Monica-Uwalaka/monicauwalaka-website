import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import TopNav from './components/TopNav.js'
import About from "./pages/aboutPage.js"
import Project from "./pages/projectsPage.js"


function App() {
  return (
    <Router>
      <div className="App">
        <TopNav/>
        <Routes>
          <Route path="*" element={<Navigate to="/about" replace />} />
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path="/projects" element={<Project/>}></Route>
          {/* <Route exact path="/experience" element={<div></div>}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
