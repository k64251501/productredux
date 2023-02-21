import React, { Component } from 'react'
import {Link} from "react-router-dom"
export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/index" className='navbar-brand'>React HOOKs EX</Link>
          <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-item'><Link to="/counter" className='nav-link'>Counter</Link></li>
                <li className='nav-item'><Link to="/product" className='nav-link'>Product</Link></li>
        
            </ul>
          </div>
      </nav>
    )
  }
}

export default Navbar