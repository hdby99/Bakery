import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav class='navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm'>
        <div class='container'>
          <a class='navbar-brand fw-bold fs-4' href='#'>
            Bakery Home
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav mx-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <Link class='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Products
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  About
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Contact Us
                </a>
              </li>
            </ul>
            <div className='buttons'>
              <Link to='/checkout' className='btn btn-outline-dark'>
                <i className='fa fa-shopping-cart me-1 ms-2'></i>
                Cart(0)
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
