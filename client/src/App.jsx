import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  SignUp  from './pages/SignUp'
import  Signin  from './pages/Signin'
import  Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
