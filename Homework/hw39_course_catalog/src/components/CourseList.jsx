import CourseCard from "./CourseCard.jsx";

function CourseList({courses}) {

    return (
        <div className={"course-list"}>
            {courses.length === 0 ? <p className={"no-courses"}>No courses available</p>
                : courses.map(course =>
                    <CourseCard key={course.id} course={course}/>)}
        </div>
    )
}

export default CourseList;