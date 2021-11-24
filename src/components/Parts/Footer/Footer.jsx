import React from 'react'
import './Footer.scss'
function Footer() {
    return (
        <footer className="footer">
        <ul className="foote_bottom_ul_amrc">
        <li><a href="http://webenlance.com">Home</a></li>
        <li><a href="http://webenlance.com">About</a></li>
        <li><a href="http://webenlance.com">Services</a></li>
        <li><a href="http://webenlance.com">Pricing</a></li>
        <li><a href="http://webenlance.com">Blog</a></li>
        <li><a href="http://webenlance.com">Contact</a></li>
        </ul>
      
        <p className="text-center">Copyright @2021 | developed by  <a href="#">Waleed && Diab</a></p>
        
        <ul className="social_footer_ul">
        <li><a href="http://webenlance.com"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="http://webenlance.com"><i className="fab fa-twitter"></i></a></li>
        <li><a href="http://webenlance.com"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="http://webenlance.com"><i className="fab fa-instagram"></i></a></li>
        </ul>
        </footer>
        
    )
}

export default Footer
