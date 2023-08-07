import "../styles/Carrousel.sass";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Carrousel = ({ pictures }) => {

    const [displayed, definePicture] = useState(0);
    const prevPicture = () => {
        definePicture(displayed === 0 ? pictures.length - 1 : displayed - 1);
    };

    const nextPicture = () => {
        definePicture(displayed === pictures.length - 1 ? 0 : displayed + 1);
    };

    return (
        <div className="displayed-picture">
            {pictures.map((picture, index) => (

                <img className="picture" key={index} src={picture} alt="" style={{ display: index === displayed ? 'block' : 'none' }} />
            ))}

            {
                pictures.length === 1 ? (
                    <></>
                ) : (
                    <>
                        <FontAwesomeIcon className="leftarrow" icon={faAngleLeft} onClick={prevPicture} />
                        <FontAwesomeIcon className="rightarrow" icon={faAngleRight} onClick={nextPicture} />
                        <div className="pagination">{displayed + 1}/{pictures.length}</div>
                    </>
                )
            }

        </div>
    );
};

export default Carrousel;