import React from 'react';
import { relative } from 'path';
import Carrousel from './Carrousel';

//this section holds the element to be displayed in the featured section which contains carrousel and many other as the case may be
const Featured = () => {
    return (
        <div style={{position: relative}}>

            <Carrousel />

            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>

            </div>

        </div>

    );
};

export default Featured;