import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "./ThemeMode";



const About = () => { 
    const { theme, changeTheme } = useTheme()
    const [themeDivOpen, setThemeDivOpen] = useState(false);
    const [settingsClose, setSettingsClose] = useState(false);
    const [timesOpen, setTimesOpen] = useState(true);
    
    
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

    return (
        <body className="">
           <nav style={{backgroundColor: theme.navBackgroundColor}} className="nav">
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
            <main style={{backgroundColor: theme.mainBackgroundColor}} id="main">
                <header class="flex">
                    <div class="header-div">
                        <h1>About Me</h1>
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

                        <div onClick={Purple} className="color-selecion four"></div>
                    </div>
                     </div>
                </header>
        
                <section className="">
                    <article>
                        <div id="hi">
                            <h2>I am Ibrahim, A <span style={{color: theme.spanBackgroundColor}}>web developer</span></h2>
                        </div>
                        <div>
                            <p id="p-about-me">
                                I am Oyesola Ibrahim, Self-Motivated Professional Full Stack Web Developer with over 1 year of working experience. 
                                I learnt the basics of Fullstack Development at <a href="https://geegstack.academy/" target="_blank" id="geegstack" rel="noreferrer">Geegstack Academy School of Software Engineering</a>. I'll do bug fixing on your website or if you need
                                 to add more features to your websites. I can convert your desired design into real work as per your requirement.
                                I'll put all my best efforts and creativity to ensure 100% Satisfaction, Fast_Delivery, and Quality_Services. 
                                You will find working with me to be a little different in a relaxed and friendly environment. Creativity, Professional Competence & Work on Time, are the keywords that describe my work. 
                            </p>
                        </div>
                        <div className="flex-start column2">
                            <div>
                                <div className="flex flex-ul">
                                    <ul id="ul-1">
                                        {/*<div className="details">
                                            <li class="h3">Website:</li>
                                            <li><a href="#" id="click-here">Click Here</a></li>
                                        </div>
                                        <div className="details">
                                            <li class="h3">Degree:</li>
                                            <li>BSC</li>
                                        </div>*/}
                                    </ul>
                                    <ul id="ul-2">
                                        <div className="details email">
                                            <li className="h3">Email:</li>
                                            <li>oyesolaibrahim14@gmail.com</li>
                                        </div>
                                        <div className="details">
                                            <li className="h3">Phone:</li>
                                            <li>+2348168085157</li>
                                            <li>+2347049509803</li>
                                        </div>
                                        <div className="details">
                                             <li className="h3">Freelance:</li>
                                            <li>Available</li>
                                        </div>
                                        <div className="details">
                                             <li class="h3">Country:</li>
                                            <li>Nigeria</li>
                                        </div>
                                    </ul>
                                </div>
                                <div id="button-container">
                                    <a style={{backgroundColor: theme.buttonBackgroundColor}} class="button" href="assets/profilep.jpg" download="oyesolaCV">Download CV</a>
                                    {/*<a style={{backgroundColor: theme.buttonBackgroundColor}} class="button" href="/Contact">Connect</a>*/}
                                    <Link style={{backgroundColor: theme.buttonBackgroundColor}} class="button" to="/Contact">Connect</Link>
                                </div>
                            </div>
                            <div id="technologies">
                                <div>
                                    <h3>HTML</h3>
                                    <div id="html-level" style={{backgroundColor: theme.technologiesBackgroundColor, border: theme.technologiesBorder}}>
                                        <div id="html-percentage" style={{ backgroundColor: theme.technologiesPercentagesBackgroundColor}}></div>
                                    </div>
                                </div>
                                <div>
                                    <h3>CSS/SCSS</h3>
                                    <div id="css-level" style={{ backgroundColor: theme.technologiesBackgroundColor, border: theme.technologiesBorder}}>
                                        <div id="css-percentage" style={{backgroundColor: theme.technologiesPercentagesBackgroundColor}}></div>
                                    </div>
                                </div>
                                <div>
                                    <h3>TailwindCSS</h3>
                                    <div id="tailwind-level" style={{backgroundColor: theme.technologiesBackgroundColor, border: theme.technologiesBorder }}>
                                        <div id="tailwind-percentage" style={{backgroundColor: theme.technologiesPercentagesBackgroundColor}}></div>
                                    </div>
                                </div>
                                <div>
                                    <h3>ReactJS</h3>
                                    <div id="react-level" style={{backgroundColor: theme.technologiesBackgroundColor, border: theme.technologiesBorder }}>
                                    <div id="react-percentage" style={{backgroundColor: theme.technologiesPercentagesBackgroundColor}}></div>
                                    </div>
                                </div>
                                <div>
                                    <h3>ExpressJS</h3>
                                    <div id="express-level" style={{backgroundColor: theme.technologiesBackgroundColor, border: theme.technologiesBorder}}>
                                        <div id="express-percentage" style={{backgroundColor: theme.technologiesPercentagesBackgroundColor}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <div id="horizontal-line"></div> 
             
            <nav style={{backgroundColor: theme.navBackgroundColor}} className="nav2">
        <div className="home-home column home-column" style={{backgroundColor: theme.navDivbackgroundColor}}>
            <i className="fa fa-home fa-2x" aria-hidden="true"></i>
            <Link to={"/"}>Home</Link>
        </div>
        <div className="home-about-me column home-column" style={{backgroundColor: theme.navDivbackgroundColor}}>
            <i className="fa fa-address-book fa-2x" aria-hidden="true"></i>
            <Link to={"/About"}>About Me</Link>
        </div>
        <div className="home-portfolio column home-column" style={{backgroundColor: theme.navDivbackgroundColor}}>
            <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>
            <Link to={"/Portfolio"}>Portfolio</Link>
        </div>
        <div className="home-contact column home-column" style={{backgroundColor: theme.navDivbackgroundColor}}>
            <i className="fa fa-phone-square fa-2x" aria-hidden="true"></i>
            <Link to={"/Contact"}>Contact</Link>
        </div>
     </nav> 
        </body>
        
    )
}

export default About;