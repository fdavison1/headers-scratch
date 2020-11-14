import React from 'react';
import '../sass/SpinningDoily.scss';
import doily from '../assets/doily.svg';

export const SpinningDoily = () => {
    return (
            <div className='splash'>
                <img className='loading' src={doily} alt='spinning doily' />
            </div>
    )
}