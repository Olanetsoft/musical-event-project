import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31707.131986541426!2d3.3449008182637123!3d6.5981706946092835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9257aea78bbd%3A0x9ab0fc0e56801aa1!2sMotorways%20Centre!5e0!3m2!1sen!2sng!4v1573504772767!5m2!1sen!2sng" 
             height="500px"
             width="100%" 
             frameBorder="0"
              allowFullScreen="">
            
              </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;