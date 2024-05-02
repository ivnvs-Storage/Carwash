import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Reports } from './reg.tsx';
import { Sessions } from './pages/sessions.tsx';
import { Booking } from './pages/booking.tsx';
import { Info } from './pages/info.tsx';
import { Login } from './pages/login.tsx';




ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
    <Router>
      <Routes>
        <Route path="/about" element={<Reports/>}/>
      </Routes>
      <Routes>
        <Route path="/sessions" element={<Sessions/>}/>
      </Routes>
      <Routes>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
      <Routes>
        <Route path="/info" element={<Info/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  </>,
)