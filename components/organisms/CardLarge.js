import React from 'react';

import Title from '../atoms/Title'

import Button from '../molecules/Button'
import ImageCardLarge from '../molecules/ImageCardLarge';
import CoursesText from '../molecules/CoursesText';


const CardLarge = ({ courseTitle, courseResume, imageRute, contentCourse }) => {


    return (
        <div className="card-large">
            <div className="card-container">
                <div className="imageCard-container">
                    <ImageCardLarge courseTitle={courseTitle} courseResume={courseResume} imageRute={imageRute} />
                </div>

                <div className="card-title">
                    <Title size="sm" color="secondary" weight="bold">CONTENIDO DEL CURSO</Title>
                </div>
                <div className="text-container">
                    {contentCourse.map((content) => <CoursesText key={content.title} title={content.title} description={content.description} />)}

                </div>
                <div className="button-action">
                    <Button>Ver curso</Button>
                </div>
            </div>
            <style jsx>{`
                .card-large{
                    width: 100vw;
                    margin-top: 6rem;
                }
                .card-container{
                    display: grid;
                    grid-template-areas: "imageArea titleArea titleArea titleArea"
                                         "imageArea textArea textArea textArea"
                                         "imageArea buttonArea buttonArea buttonArea";
                    grid-template-columns: 275px 1fr 1fr 1fr;
                    grid-template-rows: 40px 1fr 80px;
                    grid-gap: 10px;
                    
                    /* flex-direction: column; */
                    /* align-items: center; */
                    width: 1144px;
                    height: 400px;
                    margin: 0 auto;
                    padding: 0;
                    border-radius: 30px;
                    background-color: rgba(255, 255, 255, 0.5);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: solid 1px rgba(255, 255, 255, 0.2);
                }
                .imageCard-container{
                    grid-area: imageArea;
                    margin: 0;
                    padding: 18px;

                }
                .imageCard-container img{
                    height: 100%;
                }
                .text-container{
                    grid-area: textArea;
                    display: flex;
                    flex-wrap: wrap;
                }
                .card-title{
                    height: 100%;
                    margin-top: 10px;
                }
                .image-icon{
                    width: 60px;
                    height: 60px;
                }
                .button-action{
                    grid-area: buttonArea;
                    width: 100%;
                    /* justify-self: calc(center - 20px); */
                    padding-left: calc(50% - 120px);
                    
                }
               
            `}</style>
        </div>
    );
}

export default CardLarge;