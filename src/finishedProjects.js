//finished applications ------------------------

//Jump through
var JumpThroughDes = <p>A simple 2d platformer game made in Unity. The game is made using C#, 
    and the levels were designed using Unity's Tile map editor. The game also utilizes Unity's Job System: Unitys' multithreading implementation, in order to 
    make the processing more light on main thread.     
    Available to try out in Google Play store.</p>
var JumpThroughTech = ["Unity", "2D", "TileMap", "C#", "Touch Controls", "Unity Ads", "Unity Job System", "Android"]
var JumpThroughHeader = "Jump Through"
var JumpThroughLink="https://play.google.com/store/apps/details?id=com.YeppComapany.JumpThrough"
//--------------

//Tell More Web App
var TellMoreDes =<section><p>Simple 2 page concept web application made using ReactJs and Asp.Net core. The app also uses captcha to validate if the the user posting is 
    is a robot or a human being. The application also utilizes <strong><a>Azure text analytics</a></strong> to do sentiment analysis to users' post, and separate users' responses
    depending on if the response is "positive", "negative", or "neutral", and display the results using bar chart. The app is published using Azure app service, and uses Azure SQL database for data storage. 
</p>
<p>
    I built this applicaiton mainly to try out Azure Text Analytics api, and ReactJs Charts as well as Google Captcha.
    My main priority was to collect the data, analyze it, and display it using ReactJs Charts. Since the application uses Azure SQL Database, data posting and extraction could be slower due to the fact that server is located in a different country. 
</p>
</section> 
var TellMoreTech = ["ReactJs", "CSS", "ReactJs Charts", "C#", "Asp.Net Core", "Azure Web Service", "Azure Text Analytics", "Google Captcha", "Azure SQL Database", "SQL"]
var TellMoreHeader = "Tell More Web App"
var TellMoreLink="https://tellmore.azurewebsites.net/"
//--------------

//amzl web app
var AMZLDes = <p>This application is made using ReactJs and Asp.Net core to help with delivery van dispatch at DCG1 Amazon logistics. The applicaiton uses Firesbase Cloud storage
    for data storage and realtime update on data changes. Made to be the "controlling" application for the dispatch process, all C.R.U.D actions can be performed through this application. 
    The "Add Routes" section can be used to parse the string data, and
    save to data base. The data is later displayed in the dashboard, and all data can be updated or deleted solely from this applicaiton. 
</p>
var AMZLWebTech =["ReactJs", "Firebase", "JavaScript","Asp.Net Core", "C#", "Realtime", "CSS", "Bootstrap", "Azure Web Service"]
var AMZLWebHeader="AMZL Web App"
var AMZLWebLink = "https://github.com/idkman666/amzl_proto_web"
//---------------

//amzl mobile app
var AMZLMobileDes = <p>This is a mobile application built using Flutter for android devices, and is a complementary app to AMZL Web application. Any changes made through mobile application is 
    is displayed in AMZL Web application in real time, and vice versa. Just like AMZL Web application, this mobile app also connects to Firebase Cloud storage for data storage and retrieval. The users
    have to be authenticated through Firebase Auth in order to be able to use the application. 
    </p>
var AMZLMobileTech = ["Flutter", "Dart", "Firebase", "Realtime", "Android", "Firebase Auth"]
var AMZLMobileHeader = "AMZL Mobile App"
var AMZLMobileLink = "https://github.com/idkman666/flutter_amzl_public"
//-------------

//Pome: Timer App
var PomeTimerAppDes = <p>Made with Flutter, this is a timer applicaiton that makes use of sqlite to store data locally. Some Rive files have also been integrated to make animated UI elements.
    This app also makes use of native code implementation to control mobile features. </p>
var PomeTimerAppTech = ["Flutter" , "Dart"]
var PomeTimerAppHeader = "Pome: Timer App"
var PomeTimerAppLink = "https://play.google.com/store/apps/details?id=com.paperleaf.pomeapp"


class Project{

    constructor(description, tech, header, link)
    {
        this.description = description;
        this.tech = tech;
        this.header = header;
        this.link = link;
    }
}

export const AMZLMobileApp = new Project(AMZLMobileDes,AMZLMobileTech, AMZLMobileHeader, AMZLMobileLink);
export const JumpThrough = new Project(JumpThroughDes, JumpThroughTech, JumpThroughHeader, JumpThroughLink);
export const TellMore = new Project(TellMoreDes, TellMoreTech, TellMoreHeader, TellMoreLink);
export const AMZLWebApp = new Project(AMZLDes, AMZLWebTech, AMZLWebHeader, AMZLWebLink);
export const PomeTimerApp = new Project(PomeTimerAppDes, PomeTimerAppTech, PomeTimerAppHeader, PomeTimerAppLink);

