import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import Cookies from 'js-cookie'

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = Cookies.get('jwt');
  console.log(isLoggedIn);
  const logout = () => {
    Cookies.remove('jwt');
    navigate('/');
  }

  const { cart } = useCart();

  return (
    <div className='position-sticky top-0' style={{zIndex:'40'}}>
      <div className='position-sticky top-0' style={{zIndex:'40'}}>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'} href="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                isLoggedIn? (
                  <li className="nav-item">
                    <Link className="nav-link" onClick={logout} href="#">
                      <span>Logout</span>
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to={'/login'} className="nav-link" href="#">
                      <span>Login</span>
                    </Link>
                  </li>
                  
                )
              }
              {
                !isLoggedIn && (
                  <li className="nav-item">
                <Link to={'/signup'} className="nav-link" href="#">
                  <span>Sign Up</span>
                </Link>
              </li>
                )
              }
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#">Action</Link></li>
                  <li><Link className="dropdown-item" href="#">{isLoggedIn}</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" href="#" onClick={logout}>Logout</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={'/cart'} className='nav-link'>
                  <span className='bi bi-cart'>{cart.length}</span>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Header
