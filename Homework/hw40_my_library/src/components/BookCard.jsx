import AvailabilityBadge from "./AvailabilityBadge.jsx";
import Card from "./Card.jsx";

function BookCard({book}) {
    return (
        <Card>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>Год: {book.year}</p>
            <p>Жанр: {book.genre}</p>
            <p>Доступных экземпляров: {book.copies}</p>
            {book.year < 2000 && <p className={"classic"}>Классическое издание</p>}
            <AvailabilityBadge copies={book.copies} />
        </Card>
    )
}

export default BookCard;
