import React, {Component} from "react";
import Book from "./Book";
import * as BooksAPI from './BooksAPI'

class Shelf extends Component{
    state = {
        books:[],
        showSearchPage: false
      }
      componentDidMount(){
        BooksAPI.getAll()
        .then((books)=>{
          this.setState(()=>({
            books
          }))
        })
      }
    render(){
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                  <ol className="books-grid">
                      {this.state.books.map((book)=>(
                        book.shelf===this.props.type?
                          <Book book={book}title={book.title} imageLinks={book.imageLinks.thumbnail} authors={book.authors} shelf={book.shelf}/>
                          :console.log("")
                        )
                      )}
                      
                      </ol>
                    </div>
            </div>
        )
    }
}
export default Shelf;