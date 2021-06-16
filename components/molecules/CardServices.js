import React from 'react';
import Paragraph from '../atoms/Paragraph'
import Title from '../atoms/Title'
import Icon from '../atoms/Icon'

const CardServices = ({ title, paragraph, image }) => {
    return (
        <>
            <div className="card-container">
                <div className="image-container"><Icon name={image} size="lg" /></div>
                <div className="text-container">
                    <Title size="md" color="secondary" isCentered>{title}</Title>
                    <Paragraph>{paragraph}</Paragraph>
                </div>

            </div>
            <style jsx>{`
                .card-container{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 347px;
                    height: 400px;
                    margin: 90px 20px 0 20px;
                    padding: 70px;
                    border-radius: 30px;
                    background-color: rgba(255, 255, 255, 0.3);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: solid 1px rgba(255, 255, 255, 0.2);
                }
                .image-icon{
                    width: 60px;
                    height: 60px;
                }
               
            `}</style>
        </>
    );
}

export default CardServices;