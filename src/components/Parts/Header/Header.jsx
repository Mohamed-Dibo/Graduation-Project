import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { auth } from "../../../Firebase/Firebase";
import { useSelector } from "react-redux";
import userImage from "../../../assets/images/user-img.png";
import "./Header.scss";

function Header(props) {
  const { fetchedData } = useSelector((state) => state);

  let location = useLocation();
  return (
    // <div className='header'>
    //   <div className='container-fluid'>
    //     <header className='header-navbar'>
    //       <div className='leftPart'>
    //         <div className='logo'>
    //           <Link to='/'>minuteف</Link>
    //         </div>
    //         <div className='search-container'>
    //           <form className='search'>
    //             <div className='form-content'>
    //               <span className='search-icon'>
    //                 <i className='fas fa-search'></i>
    //               </span>
    //               <input
    //                 type='text'
    //                 name='search'
    //                 aria-label='Search'
    //                 className='search-input'
    //                 placeholder='Search'></input>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //       <div className='rightPart'>
    //         <div className='RighC'>
    //           <NavLink
    //             style={({ isActive }) => {
    //               return {
    //                 display: 'block',
    //                 margin: '1rem 0',
    //                 color: isActive ? 'white' : 'rgba(255, 255, 255, 0.65)',
    //               };
    //             }}
    //             to={`/`}>
    //             <i className='fas fa-home '></i>
    //           </NavLink>
    //         </div>
    //         <div className='RighC'>
    //           <NavLink
    //             style={({ isActive }) => {
    //               return {
    //                 display: 'block',
    //                 margin: '1rem 0',
    //                 color: isActive ? 'white' : 'rgba(255, 255, 255, 0.65)',
    //               };
    //             }}
    //             to={`/messages`}>
    //             <i className='fas fa-comment '></i>
    //           </NavLink>
    //         </div>
    //         <div className='RighC'>
    //           <i className='fas fa-bell '></i>
    //         </div>
    //         <div className='RighC'>
    //           <NavLink
    //             style={({ isActive }) => {
    //               return {
    //                 display: 'block',
    //                 margin: '1rem 0',
    //                 color: isActive ? 'white' : 'rgba(255, 255, 255, 0.65)',
    //               };
    //             }}
    //             to={`/cart`}>
    //             <i className='fas fa-shopping-bag'></i>{' '}
    //             {fetchedData.purchased.length}
    //           </NavLink>
    //         </div>
    //         <div className='RighC'>
    //           <NavLink
    //             style={({ isActive }) => {
    //               return {
    //                 display: 'block',
    //                 margin: '1rem 0',
    //                 color: isActive ? 'white' : 'rgba(255, 255, 255, 0.65)',
    //               };
    //             }}
    //             to={`/profile`}>
    //             <i className='fas fa-user-circle'></i>
    //           </NavLink>
    //         </div>

    //         <div className='RighC'>
    //           {location.pathname === '/register' ? (
    //             <NavLink
    //               style={({ isActive }) => {
    //                 return {
    //                   display: 'block',
    //                   margin: '1rem 0',
    //                   color: isActive ? 'white' : 'rgba(255, 255, 255, 0.65)',
    //                 };
    //               }}
    //               to={`/login`}>
    //               Sign in <i className='fas fa-sign-out-alt ps-2'></i>
    //             </NavLink>
    //           ) : (location.pathname === '/login' || location.pathname === '/wellcome'  ) ? (
    //             <NavLink
    //               style={({ isActive }) => {
    //                 return {
    //                   display: 'block',
    //                   margin: '1rem 0',
    //                   color: isActive ? 'white' : 'rgba(255, 255, 255, 0.65)',
    //                 };
    //               }}
    //               to={`/register`}>
    //               Sign up <i className='fas fa-sign-out-alt ps-2'></i>
    //             </NavLink>
    //           ) : (
    //             <NavLink
    //               style={({ isActive }) => {
    //                 return {
    //                   display: 'block',
    //                   margin: '1rem 0',
    //                   color: isActive ? 'white' : 'rgba(255, 255, 255, 0.65)',
    //                 };
    //               }}
    //               to={`/wellcome`}>
    //               <span onClick={() => auth.signOut()}>
    //                 Logout <i className='fas fa-sign-out-alt ps-2'></i>
    //               </span>
    //             </NavLink>
    //           )}
    //         </div>
    //       </div>
    //     </header>
    //   </div>
    // </div>
    <nav className="main__navbar navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar__logo navbar-brand" to="/">
          Minuteف
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar__search">
            <form className="search__form d-flex">
              <input
                className="search__formInput form-control"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="search__formBtn" type="submit">
                <i className="fas fa-search text-dark "></i>
              </button>
            </form>
          </div>
          <ul className="navbar__list navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="navbar__listItem  nav-item">
              <div className="list__itemProfile">
                <Link
                  className="nav-link active d-flex align-items-center p-1"
                  aria-current="page"
                  to="/profile"
                >
                  <figure className="mb-0 rounded-circle">
                    <img
                      className="w-100 rounded-circle"
                      src={userImage}
                      alt=""
                    />
                  </figure>
                  <div className="ms-1">
                    <h5 className="text-capitalize mb-0">waleed elbana</h5>
                  </div>
                </Link>
              </div>
            </li>
            <li className="navbar__listItem nav-item">
              <Link
                className="item__link nav-link active"
                aria-current="page"
                to="/"
              >
                <i className="fa__item fas fa-home"></i>
              </Link>
            </li>
            <li className="navbar__listItem nav-item">
              <Link className="item__link nav-link" to="/messages">
                <i className="fa__item far fa-comment-alt"></i>
                <span className="item__notification"></span>
              </Link>
            </li>
            <li className="navbar__listItem nav-item">
              <a className="item__link nav-link" href="#">
                <i className="fa__item far fa-bell"></i>
                <span className="item__notification"></span>
              </a>
            </li>
            <li className="navbar__listItem nav-item">
              <Link className=" item__link nav-link" to="/products">
                <i className="fa__item fas fa-shopping-cart"></i>
              </Link>
            </li>
            <li className="navbar__listItem nested__list  nav-item">
              <div className="item__link">
                <i className="fa__item fas fa-th-large"></i>
              </div>
              <ul className="list__itemOption list-unstyled text-dark p-2">
                <li className="option__eCommerce mb-2">
                  <Link className="btn text-capitalize w-100" to="/products">
                    <i className="fas fa-store"></i> ecommerce
                  </Link>
                </li>
                <li className="option__setting mb-2">
                  <a className="btn text-capitalize w-100" href="#">
                    <i className="fas fa-cogs"></i> setting
                  </a>
                </li>
                <li className="option__logout">
                  {location.pathname === "/register" ? (
                    <NavLink
                      className=" btn btn-outline-danger  text-capitalize w-100"
                      to={`/login`}
                    >
                      <i className="fas fa-sign-out-alt"></i> Sign in
                    </NavLink>
                  ) : location.pathname === "/login" ||
                    location.pathname === "/wellcome" ? (
                    <NavLink
                      className=" btn btn-outline-danger  text-capitalize w-100"
                      to={`/register`}
                    >
                      <i className="fas fa-sign-out-alt"></i> Sign up
                    </NavLink>
                  ) : (
                    <NavLink
                      className=" btn btn-outline-danger  text-capitalize w-100"
                      to={`/wellcome`}
                      onClick={() => auth.signOut()}
                    >
                      <i
                        className="fas fa-sign-out-alt"
                        
                      ></i>{" "}
                      logout
                    </NavLink>
                  )}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
