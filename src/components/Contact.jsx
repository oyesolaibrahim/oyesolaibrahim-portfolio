
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeMode";


const Contact = () => {

    const { theme, changeTheme } = useTheme();
    const [themeDivOpen, setThemeDivOpen] = useState(false);
    const [settingsClose, setSettingsClose] = useState(false);
    const [timesOpen, setTimesOpen] = useState(true);


    const Red = () => {  
        changeTheme({
        mainBackgroundColor: '#ff3800',
        navBackgroundColor: 'rgba(255, 56, 0, 0.7)',
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
    const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbweO9bIkKpG_4we13g1uFOPrdcJgrriZJwdnB6CwW0pYlM7Atm73oKrrrXJHM0dxXRi3w/exec'
    const submitButton = document.querySelector("#submit")
    const Message = document.getElementById("msgDelivered")
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const scriptURL =
          'https://script.google.com/macros/s/AKfycbweO9bIkKpG_4we13g1uFOPrdcJgrriZJwdnB6CwW0pYlM7Atm73oKrrrXJHM0dxXRi3w/exec';
        const submitButton = form.querySelector("#submit");
    
        submitButton.disabled = true;
    
        const responseBody = new FormData(form);
        const TrendBody = responseBody.getAll("TRENDS").join(" ");
        responseBody.set('TRENDS', TrendBody);
    
        fetch(scriptURL, { method: 'POST', body: responseBody })
          .then((response) => {
            Message.innerHTML = 'Message sent successfully!!!';
            setTimeout(function () {
              Message.innerHTML = '';
            }, 5000);
            form.reset();
            submitButton.disabled = false;
          })
          .catch((error) => {
            alert('Error!', error.message);
            submitButton.disabled = false;
          });
      };
    
    

    return (
        
        <body class="">
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
            <main style={{backgroundColor: theme.mainBackgroundColor }} id="about-me-main">
                <header className="flex">
                    <div className="header-div">
                        <h1>Contact</h1>
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
        
                <section className="">
                    <div className="center">
                        <h3 style={{color: theme.h3BackgroundColor }}>Have you any question?</h3>
                        <p>I am at your service</p>
                    </div>
        
                    <div className="flex call-me">
                        <div className="flex flex-contact">
                            <i style={{color: theme.h3BackgroundColor }} className="fa fa-phone fa-5x" aria-hidden="true"></i>
                            <div className="flex flex-contact">
                                <h3 style={{color: theme.h3BackgroundColor }}>Call me on</h3>
                                <p>+2348168085157, +2347049509803</p>
                            </div>
                        </div>
                        <div className="flex flex-contact">
                            <i style={{color: theme.h3BackgroundColor }} className="fa fa-map-marker fa-5x" aria-hidden="true"></i>
                          <div className="flex flex-contact">
                                <h3 style={{color: theme.h3BackgroundColor }}>Address</h3>
                                <p>Ibadan, Nigeria</p>
                            </div>
                        </div>
                        <div className="flex flex-contact address">
                            <i style={{color: theme.h3BackgroundColor }} className="fa fa-envelope fa-5x" aria-hidden="true"></i>
                            <div className="flex flex-contact">
                                <h3 style={{color: theme.h3BackgroundColor }}> Email Me</h3>
                                <p>oyesolaibrahim14@gmail.com</p>
                            </div>
                        </div>
                    </div>
        
                    <div>
                        <diV className="center">
                            <h3 style={{color: theme.h3BackgroundColor }}>Send me an Email</h3>
                            <p>I am very responsive to messages</p>
                        </diV>
                        <div>
                            <form id="form" onSubmit={handleSubmit}>
                            <div className="flex first-child">
                              <div className="label">
                                    <label for="name">
                                    </label>
                                     <input  style={{backgroundColor: theme.labelsBackgroundColor }} type="text" name="Name" id="input1" placeholder="Name"/>
                                </div>
                                 <div className="label">
                                    <label for="email">
                                    </label>
                                    <input style={{backgroundColor: theme.labelsBackgroundColor }} type="email" name="Email" id="input2" placeholder="Email"/>
                                </div>
                            </div>
                                <div className="label">
                                    <label for="subject">
                                    </label>
                                    <input style={{backgroundColor: theme.labelsBackgroundColor }} type="text" name="Subject" id="" placeholder="Subject"/>
                                </div>
                                <div className="label">
                                    <label for="message">
                                    </label>
                                    <input style={{backgroundColor: theme.labelsBackgroundColor }} type="text" name="Message" id="message" placeholder="Message"/>
                                </div>
                                <button style={{backgroundColor: theme.h3BackgroundColor }} className="send" id="submit">Send</button>
                            </form>
                            <span id="msgDelivered" className="center"></span>
                        </div>
                    </div>
                    
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


export default Contact;