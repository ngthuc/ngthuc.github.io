import React from 'react';

const LastWorkItem = (props: { lastWork: any, onClick: any }) => {
    const {lastWork, onClick} = props;
    return (
        <div className="col-md-3 col-sm-3 col-xs-6" onClick={() => onClick(lastWork)}>
            <div className="lw-item wow flipInX" data-wow-duration="2s" data-wow-delay="0.6s">
                <div className="ImageWrapper">
                    <img className="lazy img-responsive"
                         data-original={`./images/lastwork/${lastWork['key']}.min.webp`}
                         src={`./images/lastwork/${lastWork['key']}.min.webp`}/>
                    <div className="PStyleHe"/>
                </div>
            </div>
        </div>
    );
}

export default LastWorkItem;