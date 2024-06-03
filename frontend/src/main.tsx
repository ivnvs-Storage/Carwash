import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Reports } from './reg.tsx'
import { Sessions } from './pages/sessions.tsx'
import { Booking } from './pages/booking.tsx'
import { Info } from './pages/info.tsx'
import { Login } from './pages/login.tsx'
import { Pay } from './pages/pay.tsx'
import { Report } from './pages/report.tsx'
import { Confirm } from './pages/confirm.tsx'
import { Registration } from './pages/registration.tsx'
import { Bill } from './pages/bill.tsx'
import { Logout } from './pages/logout.tsx'




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
      <Routes>
        <Route path="/pay" element={<Pay/>}/>
      </Routes>
      <Routes>
        <Route path="/report" element={<Report/>}/>
      </Routes>
      <Routes>
        <Route path="/confirm" element={<Confirm/>}/>
      </Routes>
      <Routes>
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
      <Routes>
        <Route path="/bill" element={<Bill/>}/>
      </Routes>
      <Routes>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </Router>
  </>,
)