import React from 'react';
import ResumePDF from '../images/Resume.pdf';

function Resume() {
    return (
        <header>
            <div>
                <h1> Resume </h1>
                
                <iframe title = "ResumeView" src={ResumePDF}> </iframe>

                <a href={ResumePDF} download="Tony Hoan Trinh Resume.pdf">
                    <button class="btn"> <i class="fa fa-download"></i>
                        Download
                    </button>
                </a>

            </div>
        </header>


    )
}

export default Resume
