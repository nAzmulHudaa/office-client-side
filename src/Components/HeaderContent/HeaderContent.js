import React from 'react';
import './HeaderContent.css';
import one from '../../images/1.webp';
import two from '../../images/2.webp';
import three from '../../images/3.webp';
import four from '../../images/4.webp';

const HeaderContent = () => {
    return (
        <section className="headerContent text-white font">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className='mb-4'>SERVICES FOR DeFi, <br /> STO, NFT and  <br /> IEO/ICO</h1>
                        <p>X10 agency – a smart way to launch your DeFi, STO, NFT <br /> and IEO/ICO! <br /> Utility and Security Token Sales, Non Fungible Tokens <br /> Marketing for Blockchain and FinTech projects
                        </p>
                        <button className='headerBtn mb-md-0 mb-5'>Schedule a Free Consultation</button>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="d-flex mt-2">
                            <img src={one} alt="" className='header-icon '/>
                            <h5>DEFI / STO / IEO / NFT <br /> LAUNCHPAD</h5>
                        </div>
                        <div className="d-flex mt-5">
                            <img src={two} alt="" className='header-icon '/>
                            <h5>MARKETING AND PR FOR CRYPTO AND FINTECH PROJECTS</h5>
                        </div>
                        <div className="d-flex mt-5">
                            <img src={three} alt="" className='header-icon '/>
                            <h5>COMMUNITY BUILDING AND ENGAGEMENT</h5>
                        </div>
                        <div className="d-flex mt-5">
                            <img src={four} alt="" className='header-icon '/>
                            <h5 className='mt-2'>EXCHANGES LISTING</h5>
                        </div>
                    </div>
                    <span className='line'></span>

                </div>
            </div>
        </section>
    );
};


export default HeaderContent;