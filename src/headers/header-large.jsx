import React from 'react';
import logo from '../assets/hook8.png';

export const HeaderLarge = () => {
    return (
        <header className='header-large'>
            <div className='inner'>
                <div className='h1'>
                    <h1>
                        d
                    <img src={logo} alt="" />
                    ily dev
                </h1>
                </div>
                <div className='subheadings'>
                    <h2>PROJECTS</h2>
                    <div className='bar'></div>
                </div>
            </div>
        </header>
    )
}