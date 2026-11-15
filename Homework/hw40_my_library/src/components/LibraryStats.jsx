function LibraryStats({books}) {
    return (
        <>
            <p>Всего книг в каталоге: {books.length}</p>
            <p>Доступны для выдачи: {books.filter(book => book.copies > 0).length}</p>
        </>
    )
}

export default LibraryStats;