import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;