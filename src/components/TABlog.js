import React from 'react';
import './Blog.css';

import { BrowserRouter , Route, Link } from 'react-router-dom';

import BackButton from '../images/back-button.svg';

function TABlog() {

    return (
        // WARNING: May need a <BrowserRouter> here

        <header>

            <img class="backbtn" src={BackButton} alt = "BackButton"/>
 
            <div>
                <h1 class="blogheader"> September 2019 - December 2019 (My Teaching Assistant experience at UoG) </h1>

                <p class="bloginformation"> 

                Hey,

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>

                This is a blog post about my teaching assistant (TA) experience during the Fall 2019 semester for the CIS1300 course.
                I was the TA for the CIS1300 (Introduction to Programming) course for Professor Deb Stacey.
                I want to write this to inform others especially those that are considering becoming a TA.
                I am also writing this to keep track of my first TA experience and not my last one as I enjoyed it so much!
                So let's begin!

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>


                The course I was TAing was the CIS1300 (Introduction to Programming) course. It is an introduction programming course taken by first year
                students in their first semester. It covers the C programming language and covers the basics such as variables, loops, functions, logic, programming
                short projects and a bit of data structures mostly consisting of linked lists. It also covers Unix (mostly Debian), make files, basic Bash/Unix commands
                and basic information on how computers work. It was a lectured course taught by Professor Deb Stacey.

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>


                I was a TA for the course and I was working with a small group of other TA's as well.
                We had a few responsibilities that each of us was responsible for doing. We were in charge of running labs where the students had to write
                small projects and were marked during the end of the lab. We were also in charge of marking assignments and tests/exams, running office hours where students
                could come for help and monitoring the online class discussion where students can post questions.
                Each one of us had the responsibility of doing a bit of everything.

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>


                Going into this TA position I did not have any TA experience beforehand however I had a strong understanding of C and I knew I could teach it.
                I also had some minor experience in teaching programming as I was the co-leader of my programming club from high school which helped me a bit for the position.

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>


                That being said I still had some goals going into it.
                I wanted to improve my teaching and mentoring skills. Even though I had some teaching experience from high school and just teaching friends programming concepts.
                This was my first real position where I was teaching programming to other students, and I was also responsible for marking and running office hours as well.

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>


                Before the semester I was TAing, I made sure to brush up on all my knowledge from when I took the course to make sure that I was fully 100% comfortable
                with the information so I would be able to teach it to others. 

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>


                During the 4 months TAing, I had a great experience. I made a lot of friends along the way with both my fellow TAs and the students that I met as I was TAing.
                I ran a lot of lab sessions and office hours which were always a joy to run as I felt great helping others learn how to code. 
                Marking was probably my least favorite part of the position but it was still good and most of the students did very well which made it easier for me to mark.

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>


                I felt like I accomplished my goal of improving my teaching and mentoring skills as I noticed that the students wouldn't hesitate to ask me questions if needed
                and I could help them effectively, and most of the students did very well in the course.

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>


                I genuinely had a fun time as I got to interact with so many people and make many new connections and friendships with people that I would of never met.

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>


                For the Fall 2019 semester I was a TA for the CIS1300 course and I ran lab sessions, office hours, marked assignments and tests/exams and monitored the online class discussions.
                I had an absolutely amazing time helping others and it was incredibly rewarding. Being a TA is honestly 1 of the best things I had ever done
                because you get to help others learn while also helping yourself learn as when you teach others you help reinforce the same concepts for yourself.
                I feel like being a TA help reinforce a lot of the basics to me and it forced me to fully understand concepts to be able to teach it back to others.

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>


                I really do want everyone in their academic career to be a TA at least once. You teach others but you also teach yourself and gain valuable work experience
                and new friends and connections on the way.

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>


                Thank you so much to Deb Stacey and the other TAs for giving me a great Fall 2019 semester. And a big thanks to all
                the students who made this TA experience so great!

                <React.Fragment>
                    <br></br>
                    <br></br>
                </React.Fragment>


                December 2019

                </p>

            </div>

        </header>
    )
}

export default TABlog
