import { Link } from "react-router-dom";
import profileImage from "../assets/profilep.jpg";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeMode";

const Index = () => {

    const { theme, changeTheme } = useTheme();
    const [themeDivOpen, setThemeDivOpen] = useState(false);
    const [settingsClose, setSettingsClose] = useState(false);
    const [timesOpen, setTimesOpen] = useState(true);

    const Red = () => {  
        changeTheme({
        mainBackgroundColor: '#ff3800',
        navBackgroundColor: 'rgba(255, 150, 100)',
        buttonBackgroundColor: '#155263',
        spanBackgroundColor: '#155263',
        navDivbackgroundColor: 'rgb(255, 100, 50)',
        technologiesBackgroundColor: 'rgb(255, 100, 50)',
        technologiesBorder: '1px solid #ff3800',
        technologiesPercentagesBackgroundColor: '#155263',
        technologiesPercentagesBorder: '1px solid #ff3800',
        h3BackgroundColor: '#155263',
        labelsBackgroundColor: 'rgb(255, 100, 50)',
      });
    }
    
    const Brown = () => {
        changeTheme({
          mainBackgroundColor: '#83580b',
          navBackgroundColor: '#d9b650',
          buttonBackgroundColor: '#00C7FF',
          spanBackgroundColor: '#00C7FF',
          technologiesBackgroundColor: '#d9b650',
          technologiesBorder: '1px solid #807664',
          technologiesPercentagesBackgroundColor: '#00C7FF',
          technologiesPercentagesBorder: '1px solid #83580b',
          h3BackgroundColor: '#00C7FF',
          navDivbackgroundColor: '#ca9e1a',
          labelsBackgroundColor: '#d9b650',
        });
      };
      
      const Blue = () => {
        changeTheme({
          mainBackgroundColor: '#085f63',
          navBackgroundColor: '#49beb7',
          buttonBackgroundColor: '#ff3800',
          spanBackgroundColor: '#ff3800',
          technologiesBackgroundColor: '#49beb7',
          technologiesBorder: '1px solid #085f63',
          technologiesPercentagesBackgroundColor: '#ff3800',
          technologiesPercentagesBorder: '1px solid #085f63',
          h3BackgroundColor: '#ff3800',
          navDivbackgroundColor: '#688d8b',
          labelsBackgroundColor: '#688d8b',
        });
      };
      
      const Purple = () => {
        changeTheme({
          mainBackgroundColor: '#552e5a',
          navBackgroundColor: '#cf7979',
          buttonBackgroundColor: '#0962ea',
          spanBackgroundColor: '#0962ea',
          technologiesBackgroundColor: '#cf7979',
          technologiesBorder: '1px solid #552e5a',
          technologiesPercentagesBackgroundColor: '#0962ea',
          technologiesPercentagesBorder: '1px solid #552e5a',
          h3BackgroundColor: '#0962ea',
          navDivbackgroundColor: '#8b5e5e',
          labelsBackgroundColor: '#cf7979',
        });
      };
    const settingsClick = () => {
        setThemeDivOpen(true); 
        setTimesOpen(false);
        setSettingsClose(true);
    }
    const timesClick = () => {
        setThemeDivOpen(false)
        setTimesOpen(true) 
        setSettingsClose(false)
    }
    return (
        <body>
            <nav style={{backgroundColor: theme.navBackgroundColor }} className="nav">
                 <div className="flex-start home home-home">
                    <i className="fa fa-home fa-2x" aria-hidden="true"></i><Link to={"/"}>Home</Link>
                </div>
                <div className="flex-start about-me home-about-me">
                    <i className="fa fa-address-book fa-2x" aria-hidden="true"></i>
                    <Link to={"/About"}>About Me</Link>
                </div>
                <div className="flex-start portfolio home-portfolio">
                    <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                    <Link to={"/Portfolio"}>Portfolio</Link>
                </div>
                <div className="flex-start contact home-contact">
                    <i className="fa fa-phone-square fa-2x" aria-hidden="true"></i>
                    <Link to={"/Contact"}>Contact</Link>
                </div>
            </nav>
            <div id="vertical-line"></div>
            <main className="index-main" style={{backgroundColor: theme.mainBackgroundColor}}>
            <header className="flex">
                    <div className="header-div">
                        <h1>Home</h1>
                        <hr id="hr-1"/>
                        <hr id="hr-2"/>
                    </div>
                    <div>
                        <i className="fa fa-cog fa-2x theme-img" id={settingsClose && "theme-img"} onClick={settingsClick}></i>

 
                        <i id={timesOpen && "theme-img2"} className="fa fa-times fa-2x theme-img" onClick={timesClick}></i>
          
                        <div id={themeDivOpen && "open"} className="theme-div">
                            <div onClick={Red} className="color-selecion one"></div>
                  
                            <div onClick={Brown} className="color-selecion two"></div>
                       
                            <div onClick={Blue} className="color-selecion three"></div>
                            
                            <div onClick={Purple} class="color-selecion four"></div>
                        </div>
                    </div>
                </header>           
                 <section className="flex section-flex">
                    <article>
                    <div id="hi">
                        <h2>Hi, my name is <span style={{color: theme.spanBackgroundColor}}>Ibrahim</span></h2>
                        <p>Fullstack web developer</p>
                    </div>
                    <div>
                        <p id="p-about-self">
                            As a Fullstack web developer, I specialize in creating
                            dynamic and responsive web applications using the powerful
                            combination of Reactjs, Nodejs, Expressjs and MongoDB. With a strong foundation
                            in these technologies, I am passionate about creating seamless user experience
                            and leveraging the full potential of the fullstack to build
                            robust and scalable web solutions. 
                        </p>
                    </div>
                    <div id="button-container">
                        <Link style={{backgroundColor: theme.buttonBackgroundColor}} className="button button1" to={"/About"}>More About Me</Link>
                        <a style={{backgroundColor: theme.buttonBackgroundColor}} className="button button2" href="assets/profilep.jpg" download="oyesolaCV">Download CV</a>
                    </div>
                    <div id="social-media-handles">
                        <a href="https://web.facebook.com/oyesola.ibrahim.3/" target="_blank" rel="noreferrer"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>                    </a>
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>                    </a>
        
                        <a href="https://wa.link/jklb66" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp fa-2x" id="twitter-img" aria-hidden="true"></i></a>
                        <a href="https://github.com/dashboard" target="_blank" rel="noreferrer"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                    </div>
                </article>
                <img id="profile-img" src={profileImage} alt="my-logo"/>
            </section>
            </main>
            <div id="horizontal-line"></div> 
             
            <nav style={{backgroundColor: theme.navBackgroundColor}} className="nav2">
            <Link to={"/"} style={{color: "white"}} className="home-home">
            <div className="column home-column" style={{backgroundColor: theme.navDivbackgroundColor}}>
                <i className="fa fa-home fa-2x" aria-hidden="true"></i>
                Home
            </div>
            </Link>
            <Link to={"/About"} style={{color: "white"}} className="home-about-me">
            <div className="column home-column" style={{backgroundColor: theme.navDivbackgroundColor}}>
                <i className="fa fa-address-book fa-2x" aria-hidden="true"></i>
                About Me
            </div>
            </Link>
            <Link to={"/Portfolio"} style={{color: "white"}} className="home-portfolio">
            <div className="column home-column" style={{backgroundColor: theme.navDivbackgroundColor}}>
                <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                Portfolio
            </div>
            </Link>
             <Link to={"/Contact"} style={{color: "white"}} className="home-contact">
             <div className="column home-column" style={{backgroundColor: theme.navDivbackgroundColor}}>
                <i className="fa fa-phone-square fa-2x" aria-hidden="true"></i>
                Contact
            </div>
            </Link>
     </nav> 
    </body>
    )

}


export default Index;