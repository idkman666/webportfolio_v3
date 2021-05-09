import { useState } from 'react';
import './App.css';
import { JumpThrough, AMZLMobileApp, AMZLWebApp, TellMore } from "./finishedProjects";
import { codeDroppOrs, codeShareSounds } from "./underDevProjects";
import { aboutMe, contact, resume } from "./aboutme";
import tellmore_preview from "./assets/tellmore_preview.PNG";
import tellmore_gif from "./assets/tellmore_gif.gif";
import jumpthrough_preview from "./assets/jumpthrough_preview.PNG";
import jumpthrough_gif from "./assets/jumpthrough_gif.gif";
import amzl_preview from "./assets/amzl_preview.PNG";
import amzl_gif from "./assets/amzl_gif.gif";
import amzl_mobile_preview from "./assets/amzl_mobile_preview.jpg";
import amzl_mobile_gif from "./assets/amzl_mobile_gif.gif";
import me from './assets/me__.jpg'


function App() {
  const [isUnderDevPrj, setIsUnderDevPrj] = useState(false)
  const [finishedClass, setFinishedClass] = useState("tab-btn-active")
  const [underDevClass, setUnderDevClass] = useState("tab-btn")
  const [jumpThroughImg, setJumpThroughImg] = useState(jumpthrough_preview)
  const [tellMoreImg, setTellMoreImg] = useState(tellmore_preview)
  const [amzlWebImg, setAmzlWebImg] = useState(amzl_preview)
  const [amzlMobileImg, setAmzlMobileImg] = useState(amzl_mobile_preview)

  const [azmlMobileGit, setAmzlMobileGit] = useState("https://github.com/idkman666/flutter_amzl_public")
  const [amzlWebGit, setAmzlWebGit] = useState("https://github.com/idkman666/amzl_proto_web")


  const Description = (props) => {
    return (
      <div className="prjDescription">
        <h2>{props.prjName}</h2>
        <section>{props.des}</section>
        <Technology tech={props.tech} />
        {
          isUnderDevPrj == true ? <div></div> : <SourceBtn data={props.data} sourceLink={props.sourceLink} />
        }

      </div>
    );
  }

  const SourceBtn = (props) => {
    return (
      <div className="contact-container source-btn" onClick={() => window.open(props.sourceLink, "_blank")} >
        <a>{props.data}</a>
      </div>
    )
  }

  const Technology = (props) => {
    return (<section className="techlist">
      <ul>
        {
          props.tech.map((e, i) => <li key={i}>{e}</li>)
        }
      </ul>
    </section>)
  }

  const ProjectPreview = (props) => {
    return (
      <div className="prjPreview" onClick={() => openLink(props.link)}>
        <img src={props.img} alt="some meaningful description--i am too lazy, sorry" />
      </div>
    );
  }


  function changePreview(params) {
    switch (params) {
      case "jmpthru":
        setJumpThroughImg(jumpthrough_gif);
        break;
      case "tellmore":
        setTellMoreImg(tellmore_gif);
        break;
      case "amzlweb":
        setAmzlWebImg(amzl_gif);
        break;
      case "amzlmobile":
        setAmzlMobileImg(amzl_mobile_gif);
        break;
    }
  }

  function openLink(params) {
    window.open(params, "_blank");
  }

  const ProjectComponent = (props) => {
    return (
      <div className="prjComponent" onMouseOver={() => { changePreview(props.comp) }} >
        <ProjectPreview img={props.img} link={props.link} />
        <Description des={props.des} prjName={props.prjName} tech={props.tech} data={props.data} sourceLink={props.sourceLink} />
      </div>
    );
  }


  const FinishedProject = () => {
    return (
      <div className="section">
        <ProjectComponent comp="jmpthru" img={jumpThroughImg}
          des={JumpThrough.description} prjName={JumpThrough.header}
          tech={JumpThrough.tech} link={JumpThrough.link} data={"Play Store"} sourceLink={JumpThrough.link} />

        <ProjectComponent comp="tellmore" img={tellMoreImg}
          des={TellMore.description} prjName={TellMore.header}
          tech={TellMore.tech} link={TellMore.link} data={"Web Page"} sourceLink={TellMore.link} />

        <ProjectComponent comp="amzlweb" img={amzlWebImg}
          des={AMZLWebApp.description} prjName={AMZLWebApp.header} data={"Source Code"}
          tech={AMZLWebApp.tech} link={AMZLWebApp.link} sourceLink={amzlWebGit} />

        <ProjectComponent comp="amzlmobile" img={amzlMobileImg}
          des={AMZLMobileApp.description} prjName={AMZLMobileApp.header} data={"Source Code"}
          tech={AMZLMobileApp.tech} link={AMZLMobileApp.link} sourceLink={azmlMobileGit} />
      </div>
    )
  }

  const UnderDevProject = () => {
    return (
      <div className="section">
        <ProjectComponent img={me} des={codeDroppOrs.description} prjName={codeDroppOrs.header} tech={codeDroppOrs.tech} />
        <ProjectComponent img={me} des={codeShareSounds.description} prjName={codeShareSounds.header} tech={codeShareSounds.tech} />
      </div>
    )
  }

  const AboutMe = () => {
    return (<section className="section" id="aboutme">
      <h2 className="header">About Me</h2>
      {aboutMe}
    </section>)
  }

  const Contact = () => {
    return (<section className="section" id="contact">
      <h2 className="header">Contact</h2>
      {contact}
    </section>)
  }

  const Resume = () => {
    return (<section className="section" id="resume">
      <h2 className="header">Resume</h2>
      {resume}
    </section>)
  }

  function selectedProject(params) {
    if (params !== "finished") {
      //if true: user looking at under development projects
      setUnderDevClass("tab-btn-active");
      setFinishedClass("tab-btn");

    } else {
      //finished project
      setFinishedClass("tab-btn-active");
      setUnderDevClass("tab-btn");
    }
  }

  return (
    <div className="App">
      <div className="Navbar">
        <ul>
          <li><a href="#projects">projects</a></li>
          <li><a href="#aboutme">about</a></li>
          <li><a href="#contact">contact</a></li>
          <li><a href="#resume">resume</a></li>
          <li><a href="#github">github</a></li>
        </ul>
      </div>
      <section className="tabs">
        <div className={finishedClass} onClick={() => { setIsUnderDevPrj(false); selectedProject("finished") }}>Completed Projects</div>
        <div className={underDevClass} onClick={() => { setIsUnderDevPrj(true); selectedProject("underDev") }}>Under development</div>
      </section>

      <section id="projects">
        {
          isUnderDevPrj === false ? FinishedProject() : UnderDevProject()
        }
      </section>

      <AboutMe />
      <Contact />
      <Resume />
    </div>
  );
}

export function Github(params) {
  return (<section onClick={() => window.open("https://github.com/idkman666", "_blank")} className="git-section" id="github">
    <h2 className="header">Github</h2>
    <span className="fa fa-github"></span>
  </section>)
}

export default App;
