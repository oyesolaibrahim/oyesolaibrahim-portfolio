import { useState } from "react";
import { useTheme } from "./ThemeMode";

const Theme = () => {

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
    )

}


export default Theme;