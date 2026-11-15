function Footer() {

        const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p>Course Catalog - learning project - © {year}</p>
        </footer>
    )
}

export default Footer;