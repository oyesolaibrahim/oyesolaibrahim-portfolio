import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "./ThemeMode";

const Nav_desktop = () => {

    const { theme, changeTheme } = useTheme();
    const [themeDivOpen, setThemeDivOpen] = useState(false);
    const [settingsClose, setSettingsClose] = useState(false);
    const [timesOpen, setTimesOpen] = useState(true);

    return (
        <>
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
        </>

             
    )

}


export default Nav_desktop;