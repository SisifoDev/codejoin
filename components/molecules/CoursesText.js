import React from 'react'
import Title from '../atoms/Title'
import Paragraph from '../atoms/Paragraph'
import Icon from '../atoms/Icon'

export default function CoursesText({ title, description }) {

    return (
        <>
            <div className="wrapper">
                <div className="icon-container">
                    <Icon size="md" name="Number" />
                </div>
                <div className="text-container">
                    <Title size="sm" color="secondary" weight="bold" isMarginless>{title}</Title>
                    <Paragraph color="regular" isMarginless>{description}</Paragraph>
                </div>
            </div>
            <style jsx>{`
                .wrapper{
                    display: flex;
                    justify-content: start;
                    margin-top: 10px;
                }
                .text-container{
                    margin: 0 15px;
                    max-width: 220px;
                }
            `}</style>
        </>
    )
}
