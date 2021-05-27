import React from 'react';
import './Feature.css';
import top3 from '../../images/TOP3.webp';
import top5 from '../../images/TOP5.webp';

const Feature = () => {
    return (
        <section className='feature font text-white'>
            <div className="container text-center">
                <div className="row m-auto">
                    <div className="col-md-4 ">
                        <img src={top3} alt="" />
                        <h5 className='mt-3'>TOP 5 IEO Agency</h5>
                    </div>
                    <div className="col-md-4">
                        <img src={top5} alt="" />
                        <h5 className='mt-3'>TOP 5 IEO Agency</h5>

                    </div>
                    <div className="col-md-4">
                        <img src={top5} alt="" />
                        <h5 className='mt-3'>TOP 5 IEO Agency</h5>
                    </div>
                    <div className="description">
                        <h3>WHO WE ARE</h3>
                        <h5> <b>X10 Agency</b> is a full-service marketing and PR agency delivering turnkey solutions for successful crypto, DeFi, STO, ICO and IEO promotion. <br /> <br /> work with utility and security tokens (STO and IEO/ICO),crypto exchanges, DeFi, blockchain and fintech projects <br /> <br /> We are a launchpad that helps projects to get started, engage with the audience, and reach the long term goals.</h5>
                    </div>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1621955755">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
                </svg>
            </div>

        </section>
    );
};

export default Feature;