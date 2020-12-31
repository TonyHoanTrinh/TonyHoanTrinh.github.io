import React from 'react';
import './Blog.css';

import NokiaLogo from '../images/NokiaLogo.svg';
import URALogo from '../images/URALogo.png';
import UoGLogo from '../images/UoGLogo.png';



import { BrowserRouter , Route, Link, Switch, NavLink } from 'react-router-dom';

import URABlog from './URABlog.js';
import TABlog from './TABlog.js';
import NokiaBlog from './NokiaBlog.js';

function Blog() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/urablog" component={URABlog} />
            <Route exact path="/nokiablog" component={NokiaBlog} />
            <Route exact path="/tablog" component={TABlog} />
            <Route exact path="/blog" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
  function HomePage() {
    return (
      <header>
        <h1> Blog </h1>
        <p> Coming Soon! </p>
  
            {/*
        <div class="cardblog">
          <div class="containerblog">

            <img class = "cardicons" src={URALogo} alt = "URALogo"/>
            <h4>
              <b> Date 2020 - Date 2020 (My Undergraduate Research Assistantship Experience)</b>
            </h4>
  
            <NavLink to="/urablog">
              <button type="button" class="readbtn">Read More </button>
            </NavLink>
          </div>
        </div>
            */}

            {/*
        <div class="cardblog">
          <div class="containerblog">
            <img class = "cardicons" src={UoGLogo} alt = "UoGLogo"/>
            <h4>
              <b> September 2019 - December 2019 (First time as a Teaching Assistant)</b>
            </h4>
  
            <NavLink to="/tablog">
              <button type="button" class="readbtn">Read More</button>
            </NavLink>
          </div>
        </div>
            */}


        {/*}
        <div class="cardblog">
          <div class="containerblog">
            <img class = "cardicons" src={NokiaLogo} alt = "NokiaLogo"/>
            <h4>
              <b> May 2020 - December 2020 (My Co-op experience working at Nokia)</b>
            </h4>
  
            <NavLink to="/nokiablog">
              <button type="button" class="readbtn">Read More</button>
            </NavLink>
          </div>
        </div>
        */}
 
 
      </header>
    );
  }

export default Blog
