import './App.css';
import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import TopNav from './components/TopNav.js'
import Experience from './pages/experiencePage';
import About from "./pages/homePage.js"
import Project from "./pages/projectsPage.js"


function App() {
  return (
    <Router>
      <div className="App">
        <TopNav/>
        <Routes>
          <Route path="*" element={<About/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path="/projects" element={<Project/>}></Route>
          <Route exact path="/experience" element={<Experience/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
