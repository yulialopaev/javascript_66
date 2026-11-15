import CourseCard from "./CourseCard.jsx";

function CourseList({courses}) {
    if (courses.length === 0) {
        return <p className={"empty-message"}>Курсы не найдены</p>;
    }

    return (
            <div>
                {courses.map(course => <CourseCard course={course} />)}
            </div>
    )
}

export default CourseList;