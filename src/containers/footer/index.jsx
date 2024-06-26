import React from "react";

function Footer() {
  return (
    <footer>
      <section className="contact">
        <h1>Get in Touch</h1>
        <span>
          Don't hesitate to get in touch for fast, secure, and creative solutions!
        </span>
        <div className="icons">
          <i className="ri-facebook-line"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-whatsapp-line"></i>
          <i className="ri-telegram-line"></i>
        </div>
      </section>
      <div className="footer-cards">
        <div className="card-one">
          <i className="ri-mail-line"></i>
          <h4>Send mail to contact</h4>
          <p>"Reach out for fast, secure, and creative solutions. Contact us now!"</p>
        </div>
        <div className="card-two">
          <input className="mail-box" type="email" />
          <input className="btn" type="button" value={'send'}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
