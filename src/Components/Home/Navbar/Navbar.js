import React , { useEffect} from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import $ from 'jquery';

const Navbar = () => {

  const email = sessionStorage.getItem('email');
    
    function animation(){
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        $(".hori-selector").css({
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click","li",function(e){
          $('#navbarSupportedContent ul li').removeClass("active");
          $(this).addClass('active');
          var activeWidthNewAnimHeight = $(this).innerHeight();
          var activeWidthNewAnimWidth = $(this).innerWidth();
          $(".hori-selector").css({
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
          });
        });
      }
    
      useEffect(() => {
        
        animation();
        $(window).on('resize', function(){
          setTimeout(function(){ animation(); }, 500);
        });
        
      }, []);

      const handleLogout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('email');
        window.location.reload(false);
      }

    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
            <div className="container">
            <NavLink className="navbar-brand navbar-logo m-0" to="/" exact>
                <img src={logo} alt="" />
            </NavLink>
            
            <button 
                className="navbar-toggler"
                onClick={ function(){
                setTimeout(function(){ animation(); });
                }}
                type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>
        
            <div 
                className="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    
                    <div className="hori-selector">
                    <div className="left"></div>
                    <div className="right"></div>
                    </div>
                    
                    <li className="nav-item active">
                    <NavLink className="nav-link" to="/" exact>
                        Home
                    </NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard" exact>
                       Dashboard
                    </NavLink> 
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link" to="#" exact>
                        Services
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="#" exact>
                        Testimonial
                    </NavLink>
                    </li>
                </ul>
                {email ? <button className="logout-btn" onClick={handleLogout}>Log Out</button> : <Link to="/login" className="login-btn">Login</Link>}
            </div>
            </div>
        </nav>
    );
};

export default Navbar;