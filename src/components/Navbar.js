import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

         <nav>
            {/* 👇 Link replaces <a> to avoid full page reload */}
            <Link to="/">Home</Link> |{" "}
            <Link to="/aboutus">About</Link> |{" "}
            <Link to="/login">Login</Link> |{" "}
            <Link to="/product/3">Product Page</Link>
        </nav>

  )
}
