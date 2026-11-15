import BookCard from "./BookCard.jsx";

function BookList({books, genre}) {
    const booksByGenre = genre? books.filter(book => book.genre === genre) : books

    return (
        <div className={"book-list"}>
            <h2>{genre ? genre : "Полный список книг"}</h2>
            {booksByGenre.length === 0
                ? <p>В выбранной категории книги отсутствуют</p>
                : booksByGenre.map(book => (
                    <BookCard key={book.id} book={book}/>
                ))}
        </div>
    )
}

export default BookList;