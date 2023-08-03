import './App.css';
import Landing from './pages/landing';
import Product from './pages/product';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicNav from './components/navbar';
import './index.css'

function App() {
  return (
    <div className="App">
      <BasicNav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
