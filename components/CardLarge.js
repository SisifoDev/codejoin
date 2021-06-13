import React from 'react';
import Paragraph from './Paragraph'
import Title from './Title'
import Icon from './Icon'
import Button from './Button'

const CardLarge = ({ title, paragraph, icon, image }) => {
    return (
        <div className="card-large">
            <div className="card-container">
                <div className="imageCard-container">
                    <img src="/courses/html.svg" alt="Course image" />
                </div>
                {/* <div className="image-container"><Icon name={icon} size="lg" /></div> */}

                <div className="card-title">
                    <Title size="sm" color="secondary" weight="bold">TEMAS A DESARROLLAR</Title>
                </div>
                <div className="text-container">
                    <Title size="sm" color="secondary" weight="bold">Conceptos Básicos</Title>
                    <Paragraph color="regular" isMarginless>Conoce y comprende los<br /> conceptos básicos del Lenguaje<br /> de  Marcado de Hipertexto</Paragraph>
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
                    grid-template-columns: 320px 1fr 1fr 1fr;
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
                    padding: 0;

                }
                .imageCard-container img{
                    height: 100%;
                }
                .text-container{
                    grid-area: textArea;
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
                    width: 140px;
                    justify-self: center;
                }
               
            `}</style>
        </div>
    );
}

export default CardLarge;