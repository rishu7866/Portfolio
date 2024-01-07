// import Home from './Component/Home';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Component/Feed";
import Header from './Component/Header';
import Projects from "./Component/Projects";
import About from "./Component/About";
import Certificate from "./Component/Certificate";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;