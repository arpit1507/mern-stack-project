import {Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage.jsx";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div style={{minHeight:'50vw'}}>
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={<CreatePage />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
