import './App.css';
import {Routes, Route} from "react-router-dom";
import Notes from "./pages/Notes";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className='box'>
      <Header />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
