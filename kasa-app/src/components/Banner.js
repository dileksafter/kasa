import "../styles/Banner.sass";
import imgBanner from "../assets/imagebanner.png"

const Banner = () => {
    return (
        <div className="banner">
            <img src={imgBanner} alt="Banniere Kasa" />
            <h1>Chez vous, partout et ailleurs</h1>

        </div>
    );
};

export default Banner;