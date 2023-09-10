import './App.css';
import Landing from './pages/landing';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicNav from './components/navbar';
import './index.css'
import Inventory from './pages/inventory';
import Products from './pages/products'
import Orders from './pages/orders'
import Admin from './components/pageComponents/Admin';
import ProductPage from './components/pageComponents/ProductPage'


function App() {
  return (
    <div className="App">
      <BasicNav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/ProductPage' element={<ProductPage />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
