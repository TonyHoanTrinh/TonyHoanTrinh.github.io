import React from 'react';

import LinkedInLogo from '../images/LinkedInLogo.svg';
import GithubLogo from '../images/GithubLogo.svg';
import EmailLogo from '../images/EmailLogo.svg';

function Contact() {
    return (
        <header>
            
            <div class="indent"> 
            <h1> Contact </h1>

            <div>

                <a class = "contactseparatordefault" href = "https://www.linkedin.com/in/tony-hoan-trinh-965408168/">

                    <img class = "contactimages" src={LinkedInLogo} alt = "LinkedInLogo"/>

                    <h2 class="contacttext"> LinkedIn </h2>
                </a>

                <a class = "contactseparator" href = "https://github.com/TonyHoanTrinh">
                    <img class = "contactimages" src={GithubLogo} alt = "GitHubLogo"/>

                    <h2 class="contacttext"> Github </h2>
                </a>

                <a class = "contactseparator" href = "mailto:anthonytrinh@hotmail.ca">
                    <img class = "emailimage" src={EmailLogo} alt = "EmailLogo"/>

                    <h2 class="contacttext"> Email </h2>
                </a>
 
 
            </div>
            </div>
        </header>
    )

}

export default Contact
