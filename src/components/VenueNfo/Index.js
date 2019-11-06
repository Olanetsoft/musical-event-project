import React from 'react';

//import icon_calender from '../../resources/images/icons/calender.png';
import icon_location from '../../resources/images/icons/location.png';



const VenueNfo = () => {
    return (
        <div className="bck_black"> 
           <div className="center_wrapper">
                <div className="vn_wrapper">

                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red"></div>
                                <div
                                    className="vn_icon"
                                    style={{
                                        background: `url(${icon_location})`
                                    }}
                                >

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
           </div>
        </div>
    );
};

export default VenueNfo;