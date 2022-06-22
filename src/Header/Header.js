import React from 'react';
import './Header.css'
import { AiOutlineUser } from 'react-icons/ai';
import { GrCart } from 'react-icons/gr';


function Header() {
    return (
        <div className="header-nav">
            <div className="header-div-logo">
                <img className="header_logo" src="https://www.elimucentre.com/wp-content/uploads/2017/03/Jumia-Kenya-Contacts.jpg" alt="logo" />
                
                <div className="header_div_input">
                    <form className="header_div_two">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search products, brands and categories"/>
                    <button className="header_input_btn">Search</button>
                    </form>
                </div>
                <div className="header_login">
                    <span><AiOutlineUser/></span>
                    <span>Login</span>
                    <span><i class="fas fa-angle-down"></i></span>
                </div>
                <div className="header_help">
                    <span><i class="far fa-question-circle"></i></span>
                    <span>Help</span>
                    <span><i class="fas fa-angle-down"></i></span>
                </div>
                <div className="header_cart">
                    <span><GrCart/></span>
                    <span>Cart</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
