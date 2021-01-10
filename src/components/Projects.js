import React from 'react';
import './Blog.css';

import GithubLogo from '../images/GithubLogo.svg';

import NBAMachineLearningPicture from '../images/NBAMachineLearning.png';
import MandelbrotSetPicture from '../images/MandelBrot.png';
import PersonalWebsitePicture from '../images/PersonalWebsitePicture.png';
import ProjectEulerPicture from '../images/Euler.jpg';
import CPPEncryptionPicture from '../images/CPPEncryptionPicture.png';
import SwiftPicture from '../images/Swift.png';
import VisualBasicPicture from '../images/VisualBasic.png';

import Collapsible from 'react-collapsible';


function Projects() {
    return (
        <header>
            <div class="indent">
                <h1> Projects </h1>
            </div>




            <div class="cardblog">
                <div class="containerblog">

                <img class = "nbapicturestyle" src={NBAMachineLearningPicture} alt = "NBAMachineLearningPicture"/>
 

                    <Collapsible trigger="NBA MVP Predictive Modelling">
                        <p class="collapsibletext">Predicting the NBA MVP for the 2019/2020 MVP using various Machine Learning Models in R</p>
                    </Collapsible>
                    
                    <a href = "https://github.com/GuelphCodingCommunity/f19-data-science-nba">
 
                        <button type="button" class="githubbtn">
                            <img class = "linkimages" src={GithubLogo} alt = "GitHubLogo"/>
                        </button>
                    </a>
                </div>
            </div> 

            <div class="cardblog">
                <div class="containerblog">

                <img class = "mandelbrotpicturestyle" src={MandelbrotSetPicture} alt = "MandelbrotSetPicture"/>
 

                    <Collapsible trigger="Collection of Math Visualizations in Python">
                        <p class="collapsibletext">Voronoi Diagrams, Mandelbrot Set and other math visualizations in Python</p>
                    </Collapsible>
 

                    <a href ="https://github.com/TonyHoanTrinh/MathVisualizations">
                        <button type="button" class="githubbtn">
                            <img class = "linkimages" src={GithubLogo} alt = "GitHubLogo"/>
                        </button>
                    </a>
                </div>
            </div> 
 
 
 
            <div class="cardblog">
                <div class="containerblog">

                <img class = "personalwebsitepicturestyle" src={PersonalWebsitePicture} alt = "PersonalWebsitePicture"/>
 

                    <Collapsible trigger="Portfolio Website using React JS">
                        <p class="collapsibletext">Using React JS and Github Pages hosting for my personal portfolio website</p>
                    </Collapsible>
 

                    <a href="https://github.com/TonyHoanTrinh/personal_website">
                        <button type="button" class="githubbtn">
                            <img class = "linkimages" src={GithubLogo} alt = "GitHubLogo"/>
                        </button>
                    </a>
                </div>
            </div> 







            <div class="cardblog">
                <div class="containerblog">

                    <img class = "eulerpicturestyle" src={ProjectEulerPicture} alt = "ProjectEulerPicture"/>
 

                    <Collapsible trigger="Project Euler Solutions">
                        <p class="collapsibletext">Solutions to some Project Euler problems in both Javascript and Python</p>
                    </Collapsible>
 

                    <a href ="https://github.com/TonyHoanTrinh/MyProjectEulerSolutions">
                        <button type="button" class="githubbtn">
                            <img class = "linkimages" src={GithubLogo} alt = "GitHubLogo"/>
                        </button>
                    </a>
 
                </div>
            </div> 

            <div class="cardblog">
                <div class="containerblog">

                    <img class = "cpppicturestyle" src={CPPEncryptionPicture} alt = "CPPEncryptionPicture"/>
 

                    <Collapsible trigger="RSA Encryption and Decryption Program in C++">
                        <p class="collapsibletext">Program that takes in text and uses RSA encryption to encrypt messages and allows for decryption in C++. Uses the Big Num library.</p>
                    </Collapsible>
 

                    <a href="https://github.com/TonyHoanTrinh/RSA-Encryption-Decryption-CPP-">
                        <button type="button" class="githubbtn">
                            <img class = "linkimages" src={GithubLogo} alt = "GitHubLogo"/>
                        </button>
                    </a>
                </div>
            </div> 

            <div class="cardblog">
                <div class="containerblog">

                    <img class = "swiftpicturestyle" src={SwiftPicture} alt = "SwiftPicture"/>
 

                    <Collapsible trigger="Reading Tracker Mobile Application in Swift">
                        <p class="collapsibletext">Swift app built for local middle school used to track student's reading progress. Worked in collaboration with other students in Grade 12 Computer Science.</p>
                    </Collapsible>
 
  
                    <a href="https://github.com/TonyHoanTrinh/CollaborativeReadingApp">
                        <button type="button" class="githubbtn">
                            <img class = "linkimages" src={GithubLogo} alt = "GitHubLogo"/>
                        </button>
                    </a>
 
                </div>
            </div> 
 
 
             <div class="cardblog">
                <div class="containerblog">

                    <img class = "visualbasicpicturestyle" src={VisualBasicPicture} alt = "VisualBasicPicture"/>
 

                    <Collapsible trigger="Frogger Clone in Visual Basic">
                        <p class="collapsibletext">Basic Frogger Clone copy built in Visual Basic.</p>
                    </Collapsible>
 
                    <a href="https://github.com/TonyHoanTrinh/VideoGameProjectFroggerCloneInVBasic">
                        <button type="button" class="githubbtn">
                            <img class = "linkimages" src={GithubLogo} alt = "GitHubLogo"/>
                        </button>
                    </a>
 
                </div>
            </div> 


 
        </header>
    )

}

export default Projects
