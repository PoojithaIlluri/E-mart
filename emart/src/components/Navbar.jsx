import React from 'react'

 const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold text-warning fs-4" href="#">
        MN COLLECTIONS
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
            </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bolder" href="#">PRODUCTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT</a>
        </li>
        </ul>
       <div className="buttons">
        <a href="" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1"></i>LOGIN</a>
            <a href="" className="btn btn-outline-dark">
            <i className="fa fa-user-plus me-2"></i>REGISTRATION</a>
            <a href="" className="btn btn-outline-dark">
            <i className="fa fa-shopping-cart. me-3"></i>CART(0)</a>
       </div>
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar;
