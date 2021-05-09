var codeDroppOrsHeader = "Code-DroppOrs"
var codeDroppOrsDes = <p>A social media mobile applicaiton being built using Flutter that lets users post texts/pictures depending on location.
    The application uses Firebase for data storage, and retreval. The application will make use of camera, and built in GPS. Firebase Auth
    is being used for user authentication. User can also authenticate using Google, Twitter, or phone number.  
</p>
var completeFeatures = <ul>
    <li>Take pictures using camera</li>
    <li>Crop, and draw over pictures</li>
    <li>Attach coordinates to users' post</li>
    <li>Firebase Auth</li>
    <li>Get posts from firebase, and display them in maps.</li>
    <li>Basic user interface (homepage, maps, profile page, sign in page)</li>
    </ul>
var unfinishedFeatures = <ul>
    <li>Google, Twitter, phone number authentication.</li>
    <li>Sign Up feature</li>
    <li>Customzing user post</li>
    <li>Ui Changes</li>
    <li>Additional Robust features</li>
</ul>
var codeDroppOrsTech = ["Flutter","Dart", "Flutter Map", "Gps", "Firebase", "Android"]

var codeSoundsHeader = "Code-Share Sound"
var codeSoundsDes = <p>A social media mobile applicaiton being built using Flutter that lets users share their voice memo. There is a lot of features 
    I am working on including collaborations, responses, etc, but I don't want to share it here considering that the whole project could never be released (hopefully not).
    The application uses Firebase for data storage, and retreval, and audio streaming. 
</p>
var soundsCompleteFeatures = <ul>
    <li>Able to record audio and save to database</li>
    <li>Firebase Auth</li>
    <li>Sign In and Sign Up feature</li>
    <li>Read data from Firebase storage, and stream audio file</li>
    <li>Basic user interface (homepage, maps, profile page, sign in page)</li>
    </ul>
var soundsUnfinishedFeatures = <ul>
    <li>Google, Twitter, phone number authentication.</li>
    <li>Customzing user post</li>
    <li>Ui Changes</li>
    <li>Additional Robust features</li>
</ul>
var codeSoundsTech = ["Flutter", "Dart", "Android", "Audio Streaming"]

class Project{
    constructor(description, header, completedFeatures, unfinishedFeatures, tech)
    {
        this.description = description;
        this.header = header;
        this.completeFeatures = completedFeatures;
        this.unfinishedFeatures = unfinishedFeatures;
        this.tech = tech;
    }
}

export const codeDroppOrs = new Project(codeDroppOrsDes, codeDroppOrsHeader, completeFeatures, unfinishedFeatures, codeDroppOrsTech);
export const codeShareSounds = new Project(codeSoundsDes,codeSoundsHeader, soundsCompleteFeatures, soundsUnfinishedFeatures, codeSoundsTech);