import React from 'react';
import preloader from '../../assets/images/preloader.svg'

let Preloader = (props) => {
    return <div style={{ backgroundColor: 'white', 
                            borderRadius: '5px',
                            height: '500px',
                             }}>
                <img src={preloader} alt='preloader' />
            </div>
    }

export default Preloader;
