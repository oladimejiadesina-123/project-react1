import React from 'react';
import './Footer.css'

function Footer() {
    return (

        <div className="footer_cotainer">
        <div className="list-ce">
            <ul className="list-items">
                <li><a href="/" className="list_top">LET US HELP YOU</a>
                    <ul className="list-items-two">
                        <li><a href="/" className="list-items-top-two">Help Center</a></li>
                        <li><a href="/" className="list-items-top-two">How to shop on Jumia?</a></li>
                        <li><a href="/" className="list-items-top-two">Delivery options and timelines</a></li>
                        <li><a href="/" className="list-items-top-two">How to return a product on Jumia?</a></li>
                        <li><a href="/" className="list-items-top-two">Corporate and bulk purchases</a></li>
                        <li><a href="/" className="list-items-top-two">Report a Product</a></li>
                    </ul>
                </li>
                <li><a href="/" className="list_top">ABOUT JUMIA</a>
                <div className="list-item-two">
                  <li><a href="/"> About us</a></li>
                  <li><a href="/"> Jumia careers</a></li>
                  <li><a href="/"> Jumia Express</a></li>
                  <li><a href="/"> Terms and Conditions</a></li>
                  <li><a href="/"> Privacy policy</a></li>
                  <li><a href="/"> Jumia Prime</a></li>
                  <li><a href="/"> Stay Safe</a></li>
                  <li><a href="/"> Jumia Global</a></li>
                  <li><a href="/"> Jumia Anniversary</a></li>
                </div>
                </li>
                <li><a href="/" className="list_top">MAKE MONEY WITH JUMIA</a>
                <ul>
                    <li><a href="/">Sell on Jumia </a></li>
                    <li><a href="/">Become a Sales Consultant </a></li>
                    <li><a href="/">Become a Jumia Vendor Service Provider </a></li>
                    <li><a href="/">Become a Logistics Service Partner </a></li>
                    <li><a href="/">Join the Jumia DA Academy </a></li>
                    <li><a href="/">Join the Jumia KOL Program </a></li>
                </ul>
                </li>
                <li><a href="/" className="list_top">JUMIA INTERNATIONAL</a>
                    <div className="whole">
                        <ul className="left">
                            <li><a href="/">Algeria</a></li>
                            <li><a href="/">Egypt</a></li>
                            <li><a href="/">Ghana</a></li>
                            <li><a href="/">Ivory Coast </a></li>
                            <li><a href="/">Kenya </a></li>
                            <li><a href="/">Morocco </a></li>
                        </ul>
                        <ul className="right">
                            <li><a href="/">Senegal</a></li>
                            <li><a href="/">Tunisia</a></li>
                            <li><a href="/">Uganda</a></li>
                            <li><a href="/">South Africa</a></li>
                            <li><a href="/">Zando</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            </div>
            <section>
                <div>JOIN US ON</div>
                <div>PAYMENT METHODS & DELIVERY PARTNERS</div>
            </section>
            <section>
                ico
            </section>
            <div className="hr-lie"><hr/></div>
            <section>
                <div>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
					  <a href="#"><i class="fab fa-twitter"></i></a>
					  <a href="#"><i class="fab fa-instagram"></i></a>
                      <a href="#"><i class="fab fa-youtube"></i></a>
                      <a href="#"><i class="fab fa-instagram"></i></a>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
                      <div>
                          <a href="#"><i class="fab fa-cc-mastercard"></i></a>
                          <a href="#"><i class="fab fa-dhl"></i></a>
                      </div>
            </section>

        </div>
    )
}

export default Footer;
