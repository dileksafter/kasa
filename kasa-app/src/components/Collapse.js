import React, { useState } from 'react';
import '../styles/Collapse.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, content }) => {
    const [open, setOpen] = useState(false);
    const iconToShow = open ? faAngleDown : faAngleUp;

    return (
        <div className="collapse-container">
            <button onClick={() => setOpen(!open)} className="collapse-title">
                {title}
                <FontAwesomeIcon icon ={iconToShow}/>
            </button>
            {open && <div className="collapse-content">{content}</div>}
        </div>
    );
};

export default Collapse;