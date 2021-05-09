import myresume from './Resume_v2.pdf';
export var aboutMe = <section className="my-information">
    <p>Hello, my name is Paru Kandangwa. <sub>(Legal name: Paruhang Kandangwa)</sub></p>
    <p>
        I like coding and developing apps that require critical thinking. I like problem solving, and brainstorming new projects.
        I always look forward to starting new projects and like to brainstorm ways to solve possible constraints. I like working with different technologies,
        and always up for learning new skills.
    </p>
    <p>
        Aside from coding and developing apps, I am passionate about art. When I am not coding, I like sketching, taking pictures, and brainstorming new ideas for future projects.
    </p>
    <p> Currently I am trying to invest more time on Machine Learning(python), Flutter, and Unity AR.</p>
</section>

var emailIcon = <span className="fa fa-envelope"></span>
var linkedInIcon = <span className="fa fa-linkedin-square" ></span>

export var contact = <section className="contact-section">
    <div onClick={()=> window.open("https://www.linkedin.com/in/paruklimbu/", "_blank")} className="contact-container" >
        <a>LinkedIn</a>
        {linkedInIcon}
    </div>
    <div className="contact-container" >
        <a>liveless44@live.com</a>
        {emailIcon}
    </div>
</section>


var seeOnlineLink = 'https://drive.google.com/file/d/11O6j5gTQBHiaehUfeOf1X0gunNUwNf7P/view?usp=sharing'
function handleResumeClick(params)
{
    if(params === "seeResume")
    {
        window.open(seeOnlineLink, "_blank");
    }
}

export var resume = <section>
    <div className="contact-container" onClick={() => handleResumeClick("seeResume")}>
        See Online
    </div>
    <a href={myresume} download="Resume_Paru.pdf"><div className="contact-container">
        Download
    </div></a>
</section>