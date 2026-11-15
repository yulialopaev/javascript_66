import Card from "./Card.jsx";
import AvailabilityBadge from "./AvailabilityBadge.jsx";

function CourseCard({course}) {
    return (
        <Card>
            <div className={"course-heading"}>
                <h3>{course.title}</h3>
                <AvailabilityBadge isAvailable={course.isAvailable}/>
            </div>
            <p>Преподаватель: {course.teacher}</p>
            <p>Продолжительность: {course.duration}</p>
            <p>Стоимость: {course.price}$</p>
            {course.price > 400 && <p className="premium">Премиальный курс</p>}
        </Card>
    )
}

export default CourseCard;