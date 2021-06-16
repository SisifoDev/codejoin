import React from 'react';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';

const ImageCardLarge = ({ courseTitle, courseResume, imageRute }) => {

    return (
        <>
            <div className="image-container">

                <img src={`/courses/${imageRute}.svg`} alt="" />
                <Title size="sm">{courseTitle}</Title>
                <Paragraph color="regular" isCentered isMarginless>{courseResume}</Paragraph>

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