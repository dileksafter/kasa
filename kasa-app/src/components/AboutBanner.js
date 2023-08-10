import "../styles/Banner.sass";
import imgBanner from "../assets/aboutimagebanner.png"

const AboutBanner = () => {
    return (
        <div className="about-banner">
            <img src={imgBanner} alt="Banniere Kasa About" />
        </div>
    );
};

export default AboutBanner;