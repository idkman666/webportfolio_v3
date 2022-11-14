import myresume from './Resume_ParuK.pdf';
export var aboutMe = <section className="my-information">
    <p>Hello, my name is Paru Kandangwa. <sub>(Legal name: Paruhang Kandangwa)</sub></p>
    <p>
        Currently working as D365 Consultant, I customize/configure Microsoft D365 applications. I am experienced with Power Apps, and have a basic understanding of Sharepoint.  
    </p>
    <p>
        I also have experience working with Flutter/Dart, and have published a flutter mobile app on google Play Store. I have also published few mobile games made using Unity 3D on google Play Store as well.
         Programming languages I am comfortable wokring with: C#, Dart, Java, JavaScript. Platforms I am comfortable working with: Flutter, Unity, Microsoft D365, .Net Core, React Js.
    </p>
    
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


var seeOnlineLink = 'https://drive.google.com/file/d/1hBghI3B_Uc9fdY_eV7V2JnAJjRHHfO_v/view?usp=share_link'
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
    <a href={myresume} download="Resume_ParuK.pdf"><div className="contact-container">
        Download
    </div></a>
</section>