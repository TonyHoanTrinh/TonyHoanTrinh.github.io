import React from 'react';
import './Blog.css';

import NokiaLogo from '../images/NokiaLogo.svg';
import URALogo from '../images/URALogo.png';
import UoGLogo from '../images/UoGLogo.png';



import {NavLink} from 'react-router-dom';


function Blog() {
    return (
        <header>
            <div class="indent">
                <h1> Blog </h1>
            </div>

            <div class="cardblog">
                <div class="containerblog">

                <img class = "uralogostyle" src={URALogo} alt = "URALogo"/>
                <h4>
                    <b> May 2019 - August 2019 (My Undergraduate Research Assistantship Experience)</b>
                </h4>
  
                <NavLink to="/urablog">
                    <button type="button" class="readbtn">Read More </button>
                </NavLink>
                </div>
            </div>

            <div class="cardblog">
                <div class="containerblog">

                <img class = "uoglogostyle" src={UoGLogo} alt = "UoGLogo"/>
                <h4>
                    <b> September 2019 - December 2019 (First time as a Teaching Assistant)</b>
                </h4>
  
                <NavLink to="/tablog">
                    <button type="button" class="readbtn">Read More</button>
                </NavLink>
                </div>
            </div>

            <div class="cardblog">
                <div class="containerblog">

                <img class = "nokialogostyle" src={NokiaLogo} alt = "NokiaLogo"/>
                <h4>
                    <b> May 2020 - December 2020 (My Co-op experience at Nokia)</b>
                </h4>
  
                <NavLink to="/nokiablog">
                    <button type="button" class="readbtn">Read More</button>
                </NavLink>
                </div>
            </div>
 


 
        </header>
    )

}

export default Blog
