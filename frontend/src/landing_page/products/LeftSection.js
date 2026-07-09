import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-4 p-4'>
                    <img src={imageURL} />
                </div>

                <div className='col-4'></div>

                <div className='col-4'>
                    <h1>{productName}</h1>
                    <br></br>
                    <p className='fs-4'>{productDescription}</p>

                    <div>
                        <a href={tryDemo} style={{ textDecoration: "none" }} className='fs-3 mb-5'>Try demo<i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{ textDecoration: "none", marginLeft: "60px" }} className='mb-5 fs-3'>Learn More<i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' style={{ width: "45%" }} className='mt-5'/></a>
                        <a href={appStore}><img src='media/images/appstoreBadge.svg' style={{ marginLeft: "60px", width: "40%" }} className='mt-5'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;