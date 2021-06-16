import React from 'react';
import Title from '../atoms/Title'
import Button from '../molecules/Button'
import Icon from '../atoms/Icon'

const Hero = () => {
    return (
        <hero>
            <div className="hero-text">
                <Title size="lg">¡Aprendizaje sin límite para <strong>desarrolladores!</strong></Title>
                <Title size="md" weight="regular">Descubre una nueva forma de desarrollar tu potencial. Aprende HTML, CSS, JavaScript, React, UI & UX.</Title>
                <Button><span>Regístrate Gratis</span><Icon size="md" name="chevron-right" /></Button>
            </div>
            <div className="hero-image">
                <img className="logo" src="/images/Hero-Image.svg" />
            </div>
            <style jsx>{`
                hero{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100vw;
                    padding: 0 140px;
                }
                .hero-text{
                    width: 60%;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: start;
                    

                }
                span{
                    display: flex;
                    align-items: center;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    line-height: 0;
                }
            `}</style>
        </hero>
    );
}

export default Hero;