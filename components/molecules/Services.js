import React from 'react';
import CardServices from './CardServices';

const Services = () => {
    const services = [
        {
            title: "Aprendizaje por proyectos",
            paragraph: "Muchos y diferentes proyectos para realizar en cada uno de los cursos que selecciones",
            img: "rocket"
        },
        {
            title: "Avanza a tu propio ritmo",
            paragraph: "Aprende a tu propio ritmo con los proyectos que tenemos preparados para ti.",
            img: "alarm"
        },
        {
            title: "Archivos base para descargar",
            paragraph: "Descarga los repositorios de los proyectos realizados con sus archivos base",
            img: "cloud"
        }

    ]
    return (
        <>
            <section id="services" className='section-services'>
                {services.map((service) => <CardServices key={service.title} title={service.title} paragraph={service.paragraph} image={service.img} />)}
            </section>
            <style jsx>{`
            .section-services{
                display: flex;
                justify-content: center;
                padding-top: 30px;
            }
        `}</style>
        </>
    );
}

export default Services;