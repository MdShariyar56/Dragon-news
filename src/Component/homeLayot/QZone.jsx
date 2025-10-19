import React from 'react';
import swimingImg from "../../assets/swimming.png";
import ClassImg from "../../assets/class.png";
import PlayImg from "../../assets/playground.png"
import BoroImg from "../../assets/bg.png"
const QZone = () => {
    return (
        <div>
           <div  className='bg-base-200 p-3'>
             <h2 className='font-bold mb-5'>QZone</h2>
            <div className='space-y-5'>
                    <img src={swimingImg} alt="" />
                    <img src={ClassImg} alt="" />
                    <img src={PlayImg} alt="" />
            </div>
           </div>
            <div className='py-5'>
                <img src={BoroImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;