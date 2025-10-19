import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUS = () => {
    return (
        <div>
            <h1 className='font-bold'>Find Us On</h1>
            <div className="join join-vertical w-full">
            <button className="btn bg-base-100 join-item justify-start"><FaFacebook/> FaceBook</button>
            <button className="btn bg-base-100join-item  justify-start"><FaTwitter/> Twitter</button>
            <button className="btn bg-base-100join-item  justify-start"><FaInstagram/> Instagram</button>
</div> 
        </div>
    );
};

export default FindUS;