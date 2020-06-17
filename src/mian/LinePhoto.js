import React from 'react';
import './linePhoto.css';

function LinePhoto(props) {
    const lineName = props.lineName;
    return (
        <div className={`cz-line-photo ${props.className}`}>
            <div className="cz-line-photo-name">
                {lineName}
                <div className="cz-triangle"></div>
                <div className="cz-rectangle-left">
                    <div></div>
                </div>
                <div className="cz-rectangle-right">
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default LinePhoto;