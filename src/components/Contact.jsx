
import { useState } from "react";
import { useTheme } from "./ThemeMode";
import Nav_desktop from "./Nav(desktop)";
import Theme from "./Theme";
import Nav_mobile from "./Nav(mobile)";


const Contact = () => {

    const { theme, changeTheme } = useTheme();
    const [msgDelivered, setMsgDelivered] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const scriptURL =
          'https://script.google.com/macros/s/AKfycbweO9bIkKpG_4we13g1uFOPrdcJgrriZJwdnB6CwW0pYlM7Atm73oKrrrXJHM0dxXRi3w/exec';
    
        try {
          const responseBody = new FormData(form);
          const TrendBody = responseBody.getAll("TRENDS").join(" ");
          responseBody.set('TRENDS', TrendBody);
    
          const response = await fetch(scriptURL, {
            method: 'POST',
            body: responseBody,
          });
    
          if (response.ok) {
            setMsgDelivered('Message sent successfully!!!');
            setTimeout(() => {
              setMsgDelivered('');
            }, 5000);
            form.reset();
          } else {
            throw new Error('Failed to send message');
          }
        } catch (error) {
          console.error('Error sending message:', error);
        }
      };
    
        
    

    return (
        
        <div>
            <Nav_desktop/>
            <main style={{backgroundColor: theme.mainBackgroundColor }} id="about-me-main">
                <header className="flex">
                    <div className="header-div">
                        <h1>Contact</h1>
                        <hr id="hr-1"/>
                        <hr id="hr-2"/>
                    </div>
                    <Theme/>
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
                        <div className="center">
                            <h3 style={{color: theme.h3BackgroundColor }}>Send me an Email</h3>
                            <p>I am very responsive to messages</p>
                        </div>
                        <div>
                            <form id="form" onSubmit={handleSubmit}>
                            <div className="flex first-child">
                              <div className="label">
                                    <label htmlFor="name">
                                    </label>
                                     <input  style={{backgroundColor: theme.labelsBackgroundColor }} type="text" name="Name" id="input1" placeholder="Name"/>
                                </div>
                                 <div className="label">
                                    <label htmlFor="email">
                                    </label>
                                    <input style={{backgroundColor: theme.labelsBackgroundColor }} type="email" name="Email" id="input2" placeholder="Email"/>
                                </div>
                            </div>
                                <div className="label">
                                    <label htmlFor="subject">
                                    </label>
                                    <input style={{backgroundColor: theme.labelsBackgroundColor }} type="text" name="Subject" id="" placeholder="Subject"/>
                                </div>
                                <div className="label">
                                    <label htmlFor="message">
                                    </label>
                                    <input style={{backgroundColor: theme.labelsBackgroundColor }} type="text" name="Message" id="message" placeholder="Message"/>
                                </div>
                                <button style={{backgroundColor: theme.h3BackgroundColor }} className="send" id="submit">Send</button>
                            </form>
                            <span id="msgDelivered" className="center">
                            {msgDelivered}
                            </span>
                        </div>
                    </div>
                    
                </section>
            </main>
            <Nav_mobile/>
        </div>
        
    )
}


export default Contact;