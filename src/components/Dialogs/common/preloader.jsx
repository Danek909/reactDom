import React from "react";
import preloaderGif from '../../../assets/images/preloader.gif';
export const Preloader = (props) => {
    return <div style={{ backgroundColor: 'blue' }}>
                 <img src={preloaderGif} />
            </div>
}
export default Preloader;