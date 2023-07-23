import React from 'react'
import '../css/Navbar.css';
import { useState, useEffect } from 'react';
import { Router, Route, Link, RouteOutlet } from 'react-router-dom';
// import Sidebar from '../../pages/view/Sidebar';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import axios from 'axios';
import { Box, LinearProgress } from '@mui/material';
import HomePageSlider from '../../pages/view/HomePageSlider';
// import Cart from '../../pages/view/Cart';



const Navbar = () => {

  var isLoggedIn = localStorage.getItem('isLoggedIn');
  var userData = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate();

  const [tagHeated, setTagHeated] = useState(false);


  useEffect(() => {
    if (tagHeated) {
      navigate('/')
      localStorage.clear();
      window.location.reload();

    }
  }, [tagHeated]);

  const handleTagHeat = () => {
    setTagHeated(true);
  };




  return (
    <>

      <nav
        // style={{ background: '#116D6E' }}
        style={{ background: '#F0FFFF' }}
        className='Container  sticky-top navCSS'>
        {isLoggedIn ? (
          <div>
            {
              userData.role.roleName == 'Admin' ? (
                <>
                  <a style={{ color: '#116D6E' }} className='float-start menuNav' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <span style={{ background: '' }} className="material-symbols-outlined">
                      menu
                    </span>
                  </a>
                </>
              ) : (<></>)
            }


            {
              userData.role.roleName == 'User' ? (
                <>
                  <a style={{ color: '#116D6E' }} className='float-start menuNav' data-bs-toggle="offcanvas" href="#offcanvasExampleUser" role="button" aria-controls="offcanvasExample">
                    <span style={{ background: '' }} className="material-symbols-outlined">
                      menu
                    </span>

                  </a>
                </>
              ) : (<></>)
            }
            {
              userData.role.roleName == 'Vendor' ? (
                <>
                  <a style={{ color: '#116D6E' }} className='float-start menuNav' data-bs-toggle="offcanvas" href="#offcanvasExampleVendor" role="button" aria-controls="offcanvasExample">
                    <span style={{ background: '' }} className="material-symbols-outlined">
                      menu
                    </span>

                  </a>
                </>
              ) : (<></>)
            }
          </div>


        ) : (<></>)
        }
        <Link to={'/'}
        >
          <div className='float-start'>
          {/* <img className='eqippedLogo' src='E (12).png' /> */}
          <img className='eqippedLogo' src='https://eqipped.com/E (4).png' />
            {/* <img className='eqippedLogo' src='https://eqipped.com/eqippedLogo.png' /> */}
          </div>

        </Link>


        {/* <p style={{width:"px"}}></p> */}


        {/* <li className="nav-item mx-auto" id="search"> */}

        {/* <form className="form" style={{ background: 'azure' }}> */}

        {/* <input type="" className='col-3 ml-5 mt-0 mb-0 form-control float-end' placeholder="Search..." /> */}
        {/* <button className="button" type="submit">Search</button> */}
        {/* </form> */}

        {/* </li> */}



        {isLoggedIn ? (
          <div className="float-end">
            {/* <Link className='mt-2 p-4' to={'/cart'}>
              <span id='' class="material-symbols-outlined">shopping_cart</span>
            </Link>
            <Link className='p-3' onClick={handleTagHeat}><span id='' class="material-symbols-outlined">account_circle</span></Link> */}
            <Link className='navAccountResponsive mt-1 mb-1 float-end' onClick={handleTagHeat}>
              <span id='logoutIcon' class="material-symbols-outlined">logout</span>&nbsp;<p className='navAccountText'>Logout</p>
            </Link>
            <Link className='navCartResponsive mt-1 mb-1 float-end' to={'/cart'}>
              <span id='logoutIcon' class="material-symbols-outlined">shopping_cart</span>&nbsp;<p className='cartText'>Cart</p>
            </Link>
          </div>
        ) : (
          <div className='float-end'>
            <Link className='navAccountResponsive float-end mt-1 mb-1 float-end' to='/login'>
              <span id='logoutIcon' class="material-symbols-outlined">login</span>&nbsp;<p className='navAccountText'>Login</p>
            </Link>
          </div>
        )

        }


      </nav>
      {/* <HomePageSlider/> */}

      {/* <nav style={{ background: '' }} class="navbar navbar-expand-lg sticky-top navbar1"> */}
      {/* <nav className='navbar navbar-expand-lg sticky-top eqippedNavbar'>
        <div class="navbar-n<av container-fluid">
          {isLoggedIn ? (
            <div>
              {
                userData.role.roleName == 'Admin' ? (
                  <>
                    <a style={{ color: 'white' }} className='navMenu' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                      <span style={{ background: '' }} className="material-symbols-outlined">
                        menu
                      </span>
                    </a>
                  </>
                ) : (<></>)
              }


              {
                userData.role.roleName == 'User' ? (
                  <>
                    <a style={{ color: 'white' }} className='navMenu' data-bs-toggle="offcanvas" href="#offcanvasExampleUser" role="button" aria-controls="offcanvasExample">
                      <span style={{ background: '' }} className="material-symbols-outlined">
                        menu
                      </span>

                    </a>
                  </>
                ) : (<></>)
              }
              {
                userData.role.roleName == 'Vendor' ? (
                  <>
                    <a style={{ color: 'white' }} className='navMenu' data-bs-toggle="offcanvas" href="#offcanvasExampleVendor" role="button" aria-controls="offcanvasExample">
                      <span style={{ background: '' }} className="material-symbols-outlined">
                        menu
                      </span>

                    </a>
                  </>
                ) : (<></>)
              }
            </div>


          ) : (<></>)
          }
          <Link to={'/'} >
            <div className='col-2'>
              <img className='eqippedLogo' src='https://eqipped.com/eqippedLogo.png' />
            </div>
           
          </Link>
          <li class="nav-item mx-auto" id="search">

            
            {isLoggedIn ? (
              <>
                <Link className='navCart' to={'/cart'}>
                  <span id='shoppingCart' class="material-symbols-outlined">shopping_cart</span>&nbsp;<p className='cartText'>Cart</p>
                </Link>
                <Link className='navAccount' onClick={handleTagHeat}>
                  <span id='navAccount' class="material-symbols-outlined">logout</span>&nbsp;<p className='navAccountText'>Logout</p>
                </Link></>
            ) : (
              <>
                <Link className='navAccount' to='/login'>
                  <span id='navAccount' class="material-symbols-outlined">login</span>&nbsp;<p className='navAccountText'>Login</p>
                </Link>
              </>
            )

            }

          </li> */}





      {/* <div style={{ display: 'inline' }} class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item mx-auto" id="search">

                <form class="form" style={{ background: 'azure' }}>

                  <input type="search" placeholder="Search..." />
                  <button className="button" type="submit">Search</button>
                </form>

              </li>

              <p style={{ paddingRight: 200 }}></p>


              {isLoggedIn ? (
                <>

                  <li class="nav-item">

                    <div id="buttonCart">1</div>
                    <Link id="eml" to={'/cart'} class="nav-link inactive number" aria-current="page" ><span class="material-symbols-outlined">shopping_cart</span>&nbsp;Cart</Link>

                    
                  </li>
                  <li class="nav-item">

                    <Link id="eml" class="nav-link inactive number" aria-current="page" onClick={handleTagHeat}><span class="material-symbols-outlined">logout</span>&nbsp;logout</Link>
                  </li>
                  
                </>


              ) : (
                <li class="nav-item">
                  
                  
                  <a id="eml" class="nav-link active number" aria-current="page" href='/login'><span class="material-symbols-outlined">login</span>&nbsp;&nbsp;login</a>
                </li>
              )
              }


              <li class="nav-item">




              </li>

            </ul>


          </div> */}

      {/* </div>


      </nav> */}



    </>
  )

}
export default Navbar;