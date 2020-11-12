import React from 'react';
import { SpinningDoily } from './components/SpinningDoily';
import './sass/SpinningDoily.scss';
import fred from '../src/assets/fred.png';

export const Main = () => {
    return (
        <div className='page'>
            <br />
            <br />
            {/* <br /> */}
            <div className="parent">
                <img id='fred' src={fred} alt='headshot' />
                <div className="flex2">
                    <SpinningDoily />
                </div>
            </div>
            <div className='about'>
                <h1>fred davison</h1>
                <h4>web developer</h4>
                <div className='icons'>
                    <a href='https://github.com/fdavison1' target='_blank' rel="noopener noreferrer">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/fdavison1/' target='_blank' rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}