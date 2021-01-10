import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import LinkedInLogo from './images/LinkedInLogo.svg';
import GithubLogo from './images/GithubLogo.svg';
import HomeLogo from './images/MainSquare.jpg';

import { BrowserRouter , Route, Switch, NavLink } from 'react-router-dom';

import Blog from './components/Blog';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

import URABlog from './components/URABlog.js';
import TABlog from './components/TABlog.js';
import NokiaBlog from './components/NokiaBlog.js';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <header className="App-header">

                <div class="tab">

                    <NavLink to="/personal_website">
                        <button class="tablinks" type="button">
                            Home
                        </button>
                    </NavLink>

                    <NavLink to="/resume">
                        <button class="tablinks" type="button">
                            Resume
                        </button>
                    </NavLink>

                    <NavLink to="/projects">
                        <button class="tablinks" type="button">
                            Projects
                        </button>
                    </NavLink>


                    <NavLink to="/blog">
                        <button class="tablinks" type="button">
                           Blog 
                        </button>
                    </NavLink>

                    <NavLink to="/contact">
                        <button class="tablinks" type="button">
                           Contact 
                        </button>
                    </NavLink>


                </div>

            <Route exact path = "/personal_website" render = {props => (
                <React.Fragment>
                    <div class="indent">
                    <h1>
                        Tony Hoan Trinh 


                        <a class = "icons" href = "https://www.linkedin.com/in/tony-hoan-trinh-965408168/">
                            <img class = "linkimages" src={LinkedInLogo} alt = "LinkedInLogo"/>
                        </a>


                        <a class = "icons" href = "https://github.com/TonyHoanTrinh">
                            <img class = "linkimages" src={GithubLogo} alt = "GitHubLogo"/>
                        </a>
                    </h1>


                    <hr></hr>

                    <img src={HomeLogo}  class = "main" alt = "HomeLogo"/>




                    <p class = "information">
                        <React.Fragment>
                            <br>
                            </br>
                        </React.Fragment>


                        Hello!
                        <React.Fragment>
                            <br>
                            </br>
                            <br>
                            </br>
                        </React.Fragment>


                        I'm a 3rd year Computer Science Student at the University of Guelph with a major in Computer Science and a minor in Statistics.

                        <React.Fragment>
                            <br>
                            </br>
                            <br>
                            </br>
                        </React.Fragment>


                        I just recently finished my co-op work term for Summer and Fall terms and heading back to school this Winter 2021 and TAing the CIS2910 course.

                        <React.Fragment>
                            <br>
                            </br>
                            <br>
                            </br>
                        </React.Fragment>


                        I am currently the 3rd year rep for the Society of Computing and Information Science (SOCIS) and Co-Organizer of the Guelph Coding Community (GCC).
                        <React.Fragment>
                            <br>
                            </br>
                            <br>
                            </br>
                        </React.Fragment>


                        I am interested in Machine Learning with a focus on Reinforcement Learning and other topics such as Discrete Mathematics, Math Visualizations and Data Science and constantly looking for new opportunities to expand my knowledge!

                        <React.Fragment>
                            <br>
                            </br>
                            <br>
                            </br>
                        </React.Fragment>


                        Outside of work I like to read, meditate, play guitar, watch and play basketball and volunteer around my city!

                    </p>
                
                </div>
                </React.Fragment>

            )}/>

            <div>
                <Switch>
                    <Route exact path = "/resume" component = {Resume} />
                    <Route exact path = "/projects" component = {Projects} />
                    <Route exact path = "/blog" component = {Blog} />
                    <Route exact path = "/contact" component = {Contact} />
                    <Route exact path="/urablog" component={URABlog} />
                    <Route exact path="/tablog" component={TABlog} />
                    <Route exact path="/nokiablog" component={NokiaBlog} />
                </Switch>
            </div>

        </header>

        </div>
    </BrowserRouter>

  );
}

export default App;
