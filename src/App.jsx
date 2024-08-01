import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Parentroute from "./Parentroute.jsx"
import All from "./Pages/All.jsx"
import Fullstackdevelopment from "./Pages/Fullstackdevelopment.jsx"
import Datascience from "./Pages/Datascience.jsx"
import Cybersecurity from "./Pages/Cybersecurity.jsx"
import Cloudcomputing from "./Pages/Cloudcomputing.jsx"
import Course from "./Course.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Parentroute />}>
          <Route path="/" element={<All />} />
          <Route path="/fullstackdevelopment" element={<Fullstackdevelopment />} />
          <Route path="/datascience" element={<Datascience />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/cloudcomputing" element={<Cloudcomputing />} />
          <Route path="/course/:courseId" element={<Course />} />
          <Route path="*" element={<h1>Please enter correct URL</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
