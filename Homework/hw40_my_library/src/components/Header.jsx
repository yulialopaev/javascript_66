import LibraryStats from "./LibraryStats.jsx";

function Header({books}) {
    return (
        <header>
            <h1>My Library</h1>
            <LibraryStats books={books}/>
        </header>
    )
}

export default Header;
