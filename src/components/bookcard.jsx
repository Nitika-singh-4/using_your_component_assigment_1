// write the book component code here
import React from "react";
 
const BookCard = ({book}) =>{
    return(
        <div className="book-card">
            <h2>{book.title}</h2>
            <p><strong>Author:</strong>{book.author}</p>
            <p><strong>Year:</strong>{book.year}</p>
            <p><strong>Genre:</strong>{book.genre}</p>
        </div>
    )
}
export default BookCard;