import './App.css'
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Euros from './pages/Euros';
import { MarqueeMarkets } from './components/MarqueeMarkets';

function App() {


  
  return (
      <BrowserRouter>
        <div className="flex flex-col h-screen w-screen">
          <Header />
          <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/euros" element={<Euros/>}></Route>
        </Routes>
        <Footer />
        </div>


      </BrowserRouter>    
  );
}

export default App








