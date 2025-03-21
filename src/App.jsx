import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AllLinkPage from "./pages/AllLinkPage";

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/alllinks" element={<AllLinkPage />} />
    </Routes>
  </BrowserRouter>
}

export default App
