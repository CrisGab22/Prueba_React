import Login from "./components/login.jsx"
import Posts from './components/posts';
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute';
import "bootstrap/dist/css/bootstrap.min.css";
import Favs from './components/destacados';

function App() {
  
  const [user, setUser] = useState(false) 
  
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
        <Route index element={<Login setUser={setUser}/>}/>
        <Route element={<ProtectedRoute user={user}/>}>
          <Route path='/posts' element={<Posts/>} />
          <Route path='/destacados' element={<Favs/>} />
        </Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
