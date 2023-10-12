import {
  Link
} from "react-router-dom";
import  imageLogo from '../assets/logo_v3.svg';

const Header = () => {

    return (
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="animate-slide-right font-bold">
              <img src={imageLogo} className="w-10" alt="" />
            </div>
            <nav className="animate-fade-down space-x-4">
              <span className=""> 
                  <Link to="/" className="text-white hover:!text-white hover:!border-b-2">Dolares</Link></span>
              <span className="hover:text-gray-500"> 
                  <Link to="/euros" className="text-white hover:!text-white hover:!border-b-2">Euros</Link></span>
            </nav>
      </header>
    );
  };
  
  export default Header;

  