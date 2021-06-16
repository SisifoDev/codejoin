import React from 'react';
import CardLarge from './CardLarge';
import { coursesData } from '../../pages/api/coursesData'

const Courses = () => {
    // const cursos = coursesData.map((course) => course.courseTag.name)
    const contenidoCurso = coursesData.map((course) => course.content.map((contenido) => contenido.description))
    // console.log(contenidoCurso);
    // console.log(cursos);
    // console.log(cursos);


    return (
        <>
            {coursesData.map((course) => <CardLarge key={course.courseTag.name} courseTitle={course.courseTag.name} courseResume={course.courseTag.resume} imageRute={course.courseTag.image} contentCourse={course.content.map((contenido) => contenido)} />)}

        </>
    );
}

export default Courses;