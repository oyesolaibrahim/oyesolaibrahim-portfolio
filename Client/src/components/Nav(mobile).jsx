import { Link } from "react-router-dom";
import { useTheme } from "./ThemeMode";

const Nav_mobile = () => {

    const { theme, changeTheme } = useTheme();

    return (
        <>
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
        </>
    )

}


export default Nav_mobile;