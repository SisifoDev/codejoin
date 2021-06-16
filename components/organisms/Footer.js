import React from 'react';
import Paragraph from '../atoms/Paragraph';
import Icon from '../atoms/Icon'

const Footer = () => {
    return (
        <>
            <footer>
                <Paragraph color="secondary" isMarginless>Site built with Next.js</Paragraph>
                <Paragraph color="secondary" isMarginless>CopyRight © 2021 <strong>CodeJoin</strong></Paragraph>
                <div className="social-icons">
                    <a href="#"><Icon name="github" size="sm" /></a>
                    <a href="#"><Icon name="facebook" size="sm" /></a>
                    <a href="#"><Icon name="twitter" size="sm" /></a>
                    <a href="#"><Icon name="instagram" size="sm" /></a>
                </div>
            </footer>
            <style jsx>{`
            footer{
                width: 100%;
                height: 300px;
                padding-top: 80px;
                background-image: url('/images/WavesFooterBackground.svg');
                background-repeat: no-repeat;
                background-size: cover;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .footer-img{
                width: 100%;
                height: 250px;
            }
            .social-icons{
                width: 120px;
                display: flex;
                justify-content: space-around;
                margin-top: 10px;
            }
        `}</style>
        </>
    );
}

export default Footer;