import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';

const ImageCardLarge = () => {
    return (
        <>
            <div className="image-container">

                <img src="/courses/html.svg" alt="" />
                <Title size="sm">Curso de HTML</Title>
                <Paragraph color="regular" isCentered isMarginless>Aprende  desde los conceptos básicos hasta diseñar una página web completa</Paragraph>

            </div>

            <style jsx>{`
            .image-container{
                width: 240px;
                height: 360px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px;
                background: rgb(94,23,255);
                background: linear-gradient(180deg, rgba(94,23,255,1) 15%, rgba(55,180,233,1) 100%);
                border-radius: 10px;
            }
        `}</style>
        </>
    );
}

export default ImageCardLarge;