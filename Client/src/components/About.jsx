import { Link } from "react-router-dom";
import { useTheme } from "./ThemeMode";
import Nav_desktop from "./Nav(desktop)";
import Theme from "./Theme";
import Nav_mobile from "./Nav(mobile)";



const About = () => { 
    const { theme, changeTheme } = useTheme()

    return (
        <div className="">
            <Nav_desktop/>
            <main style={{backgroundColor: theme.mainBackgroundColor}} id="about-me-main">
                <header className="flex">
                    <div className="header-div">
                        <h1>About Me</h1>
                        <hr id="hr-1"/>
                        <hr id="hr-2"/>
                    </div>
                    <Theme/>
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
                                    {/*<ul id="ul-1">
                                        <div className="details">
                                            <li class="h3">Website:</li>
                                            <li><a href="#" id="click-here">Click Here</a></li>
                                        </div>
                                        <div className="details">
                                            <li class="h3">Degree:</li>
                                            <li>BSC</li>
                                        </div>
                                    </ul>*/}
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
                                             <li className="h3">Country:</li>
                                            <li>Nigeria</li>
                                        </div>
                                    </ul>
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
                                <div id="button-container" className="button-about">
                                    <a style={{backgroundColor: theme.buttonBackgroundColor}} className="button" href="assets/profilep.jpg" download="oyesolaCV">Download CV</a>
                                    {/*<a style={{backgroundColor: theme.buttonBackgroundColor}} class="button" href="/Contact">Connect</a>*/}
                                    <Link style={{backgroundColor: theme.buttonBackgroundColor}} className="button" to="/Contact">Connect</Link>
                                </div>
                    </article>
                </section>
            </main>
            <Nav_mobile/>
        </div>
        
    )
}

export default About;