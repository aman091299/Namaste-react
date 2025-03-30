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
    <div  className='header'>
        <img className='heading-logo'src="https://lh3.googleusercontent.com/7kfhqCOmv17p7RDVZulmcFmKYiCmF8gYAEGRDOt3mfK8rwH1skFf8n_m3bGmLbnvWAiWVsIFE8Pk2i2ui_dvnpTZI9QSm4ylXQGRVPAjbQ=w360-rw" alt="logo"/>
        <div className='nav-list'>
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
      
          <h4>Cart</h4>
        </div>
        {isLogin?( <button onClick={clickHandler}> Logout</button>): <button onClick={clickHandler}>Login </button>}
      
       
    </div>
    );
  };

  export default Header;