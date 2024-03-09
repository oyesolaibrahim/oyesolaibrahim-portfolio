import profileImage from "../assets/profilep.jpg";
import sunnySideImage from "../assets/desktop-design.jpg";
import tipCalculatorImage from "../assets/desktop-design-completed.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "./ThemeMode";

const Portfolio = () => {

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
<body class="">

<nav style={{backgroundColor: theme.navBackgroundColor }} className="nav">
                 <div className="flex-start home home-home">
                    <i className="fa fa-home fa-2x" aria-hidden="true"></i>
                    <Link to={"/"}>Home</Link>
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
	<main style={{backgroundColor: theme.mainBackgroundColor }} className="main-portfolio" id="portfolio">
        <header className="flex">
            <div className="header-div">
                <h1>Portfolio</h1>
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

        <section className="flex wrap">
            <article className="portfolio column">
                <img src={sunnySideImage} alt=""/>
               <div className="layer">
                    <h3>Sunnyside agency landing page
                    </h3>
                    <p>This challenge focuses mostly on HTML & CSS. There's a tiny bit of JS included for the mobile navigation toggle.</p>
                    <a href="https://sunny-side-project-jexg.vercel.app/" target="_blank" rel="noreferrer"><i class="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                </div>
                <p>HTML, CSS, JavaScript</p>
            </article>
            <article className="portfolio column">
                <img src={tipCalculatorImage} alt=""/>
                <div className="layer">
                    <h3>Tip calculator app</h3>
                    <p>This allow users to calculate the correct tip and total cost of the bill per person</p>
                    <a href="https://tip-calculator-app-psi-ebon.vercel.app/" target="_blank" rel="noreferrer"><i class="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                </div>
                <p>HTML, CSS, JavaScript</p>
            </article>
            <article className="portfolio">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio">
                <img src={profileImage} alt=""/>
            </article>

        </section>
	</main>
    <div id="horizontal-line"></div> 
     
    <nav style={{backgroundColor: theme.navBackgroundColor }} className="nav2">
        <div className="home-home column home-column" style={{backgroundColor: theme.navDivbackgroundColor }}>
            <i className="fa fa-home fa-2x" aria-hidden="true"></i>
            <Link to={"/"}>Home</Link>
        </div>
        <div className="home-about-me column home-column" style={{backgroundColor: theme.navDivbackgroundColor }}>
            <i className="fa fa-address-book fa-2x" aria-hidden="true"></i>
            <Link to={"/About"}>About Me</Link>
        </div>
        <div className="home-portfolio column home-column" style={{backgroundColor: theme.navDivbackgroundColor }}>
            <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>
            <Link to={"/Portfolio"}>Portfolio</Link>
        </div>
        <div className="home-contact column home-column" style={{backgroundColor: theme.navDivbackgroundColor }}>
            <i className="fa fa-phone-square fa-2x" aria-hidden="true"></i>
            <Link to={"/Contact"}>Contact</Link>
        </div>
     </nav> 
</body>

    )
}

export default Portfolio;