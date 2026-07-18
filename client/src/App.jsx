import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Builder from './pages/Builder'
import NotFound from './pages/NotFound'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/builder' element={<Builder/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;