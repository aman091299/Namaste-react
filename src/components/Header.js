import {useState} from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [isLogin,setIsLogin]=useState(false);
  
  const clickHandler=()=>{
     if(!isLogin){
      setIsLogin(true);
     }
     else{
      setIsLogin(false);
     }
  }
    return (
      <div className='  bg-pink-50'>
    <div  className="mx-4 flex justify-between items-center">
        <img  src="https://lh3.googleusercontent.com/7kfhqCOmv17p7RDVZulmcFmKYiCmF8gYAEGRDOt3mfK8rwH1skFf8n_m3bGmLbnvWAiWVsIFE8Pk2i2ui_dvnpTZI9QSm4ylXQGRVPAjbQ=w360-rw" className='w-19' alt="logo"/>
        <div className='flex gap-2'>
        <Link to="/">
        <h3>Home</h3>
        </Link>
        <Link to="/contact">
        <h4>Contact Us</h4>
        </Link>
          <Link to="/about">
          <h4>
          About
          </h4>
          </Link>
          <Link to="/instamart">
            <h4>Instamart</h4>
          </Link>
      
          <h4>Cart</h4>
        </div>
        {isLogin?( <button onClick={clickHandler}> Logout</button>): <button onClick={clickHandler}>Login </button>}
      
        </div>
    </div>
    );
  };

  export default Header;