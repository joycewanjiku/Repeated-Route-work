import React from "react";
import './style.css'

const Navigation = ()=>{
    return (
        <div>
            <nav>
                <ul>
                    <li> <a href="/home">Home</a></li>
                    <li> <a href="/products"> Our Products</a></li>
                    <li> <a href="/Contact Us"> Contact Us</a></li>
                </ul>
            </nav>
        </div>
    );
};
export default Navigation

