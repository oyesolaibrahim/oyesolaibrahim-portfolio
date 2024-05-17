import profileImage from "../assets/profilep.jpg";
import sunnySideImage from "../assets/desktop-desig.jpg";
import staticJobListingImg from "../assets/desktop-design.jpg";
import tipCalculatorImage from "../assets/desktop-design-completed.jpg";
import spaceTourismImage from "../assets/space-img.jpg";
import { useTheme } from "./ThemeMode";
import shortenImage from "../assets/shorten.jpg"
import Nav_desktop from "./Nav(desktop)";
import Theme from "./Theme";
import Nav_mobile from "./Nav(mobile)";

const Portfolio = () => {

    const { theme, changeTheme } = useTheme();

return (
<div>
<Nav_desktop/>         
	<main style={{backgroundColor: theme.mainBackgroundColor }} className="main-portfolio" id="portfolio">
        <header className="flex">
            <div className="header-div">
                <h1>Portfolio</h1>
                <hr id="hr-1"/>
                <hr id="hr-2"/>
            </div>
            <Theme/>
        </header>

        <section className="flex wrap popUp">
            <article className="portfolio column">
                <img src={sunnySideImage} alt=""/>
               <div className="layer">
                    <h3>Sunnyside agency landing page
                    </h3>
                    <p>This challenge focuses mostly on HTML & CSS. There's a tiny bit of JS included for the mobile navigation toggle.</p>
                    <a href="https://sunny-side-project-jexg.vercel.app/" target="_blank" rel="noreferrer"><i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                </div>
                <p className="article-p">HTML, CSS, JavaScript</p>
            </article>
            <article className="portfolio column">
            <img src={shortenImage} alt=""/>
                <div className="layer">
                    <h3>URL shortening API landing page</h3>
                    <p>It allow users to convert long URLs into shorter ones that are easier to share and manage.</p>
                    <a href="https://url-shortening-api-landing-page-liard.vercel.app/" target="_blank" rel="noreferrer"><i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                </div>
                <p className="article-p">HTML, Tailwind, JavaScript</p>
            </article>
            <article className="portfolio column">
                <img src={tipCalculatorImage} alt=""/>
                <div className="layer">
                    <h3>Tip calculator app</h3>
                    <p>This allow users to calculate the correct tip and total cost of the bill per person</p>
                    <a href="https://tip-calculator-app-psi-ebon.vercel.app/" target="_blank" rel="noreferrer"><i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                </div>
                <p className="article-p">HTML, CSS, JavaScript</p>
            </article>
            <article className="portfolio column">
                <img src={staticJobListingImg} alt=""/>
                <div className="layer">
                    <h3>Job Listings with Filtering</h3>
                    <p>In this challenge,JavaScript(ReactJs) is used to filter out jobs based on selected categories.A local JSON file was provided.</p>
                    <a href="https://static-job-listings-fawn-nu.vercel.app/" target="_blank" rel="noreferrer"><i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                </div>
                <p className="article-p">ReactJs, SCSS</p>
            </article>
            <article className="portfolio column">
                <img src={spaceTourismImage} alt=""/>
                <div className="layer">
                    <h3>Space tourism multi-page website</h3>
                    <p>This project is a collaboration between Frontend Mentor, Scrimba, and Kevin Powell.</p>
                    <a href="https://space-tourism-website-h318.vercel.app/" target="_blank" rel="noreferrer"><i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                </div>
                <p className="article-p">ReactJs, SCSS</p>
            </article>
            <article className="portfolio column">
                <img src={profileImage} alt=""/>
                {/*<p>Built using Expres.js to handle routing and middleware and EJS was utilized as the template engine for generating HTML content </p>*/}
            </article>
            <article className="portfolio column">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio column">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio column">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio column">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio column">
                <img src={profileImage} alt=""/>
            </article>
            <article className="portfolio column">
                <img src={profileImage} alt=""/>
            </article>

        </section>
	</main>
    <Nav_mobile/>
</div>

    )
}

export default Portfolio;