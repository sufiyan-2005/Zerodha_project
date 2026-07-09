import React from 'react';

function RightSection({imageURL , productName , productDescription , learnMore}) {
    return ( 
<div className='container mt-5 mb-5 p-5'>
            <div className='row'>
                <div className='col-5'>
                    <h1>{productName}</h1>
                    <br></br>
                    <p className='fs-4'>{productDescription}</p>
                    <a href={learnMore} style={{ textDecoration: "none"}} className='mb-5 fs-3'>Learn More<i class="fa-solid fa-arrow-right"></i></a>
                </div>

                <div className='col-2'></div>

                <div className='col-5 p-4'>
                    <img src={imageURL} />
                </div>
            </div>
        </div> 
    );
}

export default RightSection;