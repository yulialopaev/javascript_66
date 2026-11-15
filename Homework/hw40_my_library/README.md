# Learning Project My Library

A library catalog application for tracking book availability is a small library, featuring both a full catalog view and a breakdown by genre.

## Tech Stack

- **Frontend:** React (JSX)
- **Build Tool:** Vite
- **Styling:** CSS3
- **Language:** JavaScript (ES6+)


## Features

- **Static Local Data:** Arrays of 8 books and 5 genres.
- **Catalog Display:** Renders a list of book cards.
- **Data Flow:** Components receive data via `props`.
- **Status Indicator (`AvailabilityBadge`):** Displays the book availability status ("Доступна" / "Нет в наличии" — Available / Out of Stock).
- **Conditional Rendering:** Books published before 2000 are labeled as "Классическое издание" (Classic Edition).
- **Empty State Handling:** Displays a "В выбранной категории книги отсутствуют" message if the book list is empty.
- **Reusable `Card` Wrapper:** A generic container component utilizing the `children` prop.

## Project Structure

```
my-library/
|
+-- src/
|   |
|   +-- components/
|   |   +-- Header.jsx
|   |   +-- Footer.jsx
|   |   +-- Card.jsx
|   |   +-- BookCard.jsx
|   |   +-- BookList.jsx
|   |   +-- AvailabilityBadge.jsx
|   |   +-- LibraryStats.jsx
|   |
|   +-- data/
|   |   +-- books.js
|   |
|   +-- App.jsx
|   +-- App.css
|   +-- index.css
|   +-- main.jsx
|
+-- index.html
+-- package.json
+-- vite.config.js
```

## Getting Started

1. Clone the repository and navigate to the project directory:
```bash
git clone [https://github.com/yulialopaev/javascript_66.git](https://github.com/yulialopaev/javascript_66.git)
cd javascript_66/Homework/hw40_my_library
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
