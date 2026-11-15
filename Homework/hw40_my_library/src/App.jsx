import './App.css'
import BookList from "./components/BookList.jsx";
import {books} from "./data/books.js";
import Header from "./components/Header.jsx";
import {genres} from "./data/genres.js";
import Footer from "./components/Footer.jsx";

function App() {


    return (
        <main>
            <Header books={books}/>
            <BookList books={books}/>
            <div className={"genres-list"}>{genres.map(genre => <BookList key={genre} books={books} genre={genre}/>)}</div>
            <Footer/>
        </main>
    )
}

export default App;
