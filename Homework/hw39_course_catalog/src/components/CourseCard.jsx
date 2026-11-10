import AvailabilityBadge from "./AvailabilityBadge.jsx";
import Card from "./Card.jsx";

function CourseCard({course}) {

    return (
        <Card>
            {course.price > 400 && <span className={"premium-badge"}>Premium Course</span>}
            <div className={"course-info"}>
                <h2>{course.title}</h2>
                <p>Teacher: {course.teacher}</p>
                <p>Duration: {course.duration} hours</p>
                <p>Price: {course.price} USD</p>
            </div>

            <AvailabilityBadge isAvailable={course.isAvailable}/>
        </Card>
    )
}

export default CourseCard;