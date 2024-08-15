import { Routes, Route } from 'react-router-dom'

import Editor from './pages/Editor';
import Home from './pages/Home';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/document/:id' element={<Editor />}/>
      </Routes>
    </div>
  );
}

export default App;
