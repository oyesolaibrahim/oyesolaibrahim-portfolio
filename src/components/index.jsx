import { Link } from "react-router-dom";
import profileImage from "../assets/profilep.jpg";
import { useTheme } from "./ThemeMode";
import Nav_desktop from "./Nav(desktop)";
import Theme from "./Theme";
import Nav_mobile from "./Nav(mobile)";

const Index = () => {

    const { theme, changeTheme } = useTheme();

    return (
        <div>
            <Nav_desktop/>
            <main className="index" style={{backgroundColor: theme.mainBackgroundColor}}>
            <header className="flex">
                    <div className="header-div">
                        <h1>Home</h1>
                        <hr id="hr-1"/>
                        <hr id="hr-2"/>
                    </div>
                    <Theme/>
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
        
                        <a href="https://wa.link/hwaf21" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp fa-2x" id="twitter-img" aria-hidden="true"></i></a>
                        <a href="https://github.com/dashboard" target="_blank" rel="noreferrer"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                    </div>
                </article>
                <img id="profile-img" className="popUp" src={profileImage} alt="my-logo"/>
            </section>
            </main>
            <Nav_mobile/> 
        </div>
    )

}


export default Index;