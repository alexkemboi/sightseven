import React from 'react';
import './Footer.css';
function Footer(){
    return(
        <>
          <footer class="container footer bgColorHeader card-footer">
            <div class="row">
              <div class="col-md-4 text-center text-white">
                <h6>Contact Us</h6>
                <h7>+254-726-837-210</h7>
                <h7>info@debt.com</h7>
                <h7>Phone: 555-123-4567</h7>
                <h7>Nairobi</h7>
                <h7>Kenya</h7>
              </div>
          <div class="col-md-4 text-center text-white">
            <h6>Follow Us</h6>
            <a href="#" class="text-light me-3"
              ><i class="fab fa-facebook fa-3x "></i
            ></a>
            <a href="#" class="text-light me-3"
              ><i class="fab fa-twitter fa-3x "></i
            ></a>
            <a href="#" class="text-light me-3"
              ><i class="fab fa-instagram fa-3x "></i
            ></a>
            <a href="#" class="text-light  me-3"
              ><i class="fab fa-linkedin fa-3x "></i
            ></a>
          </div>
          <div class="col-md-4 text-center text-white">
            <h6>Quick links</h6>
            <h7 role="button" >Home</h7>
            <h7 role="button" >About us</h7>
            <h7 role="button" >Chat</h7>
            <h7>Resources</h7>
            <h7 role="button">Contact us</h7>
          </div>
        </div>
        <div class="container">
          <p class="text-center text-white">Copyright &copy; 2023 Zero debt.</p>
        </div>
     </footer>

        </>
    )
}
export default Footer;