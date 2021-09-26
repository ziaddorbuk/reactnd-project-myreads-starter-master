import React, { Component } from "react";
import * as BooksAPI from './BooksAPI'
import Book from "./Book";
class Search extends Component{
    state ={
        query:'',
        books:[],
        shelf:'none'
    }
    updateQuery=(query)=>{
        this.setState(()=>({
            query:query
        }))
        BooksAPI.search(query)
        .then((books)=>{
          this.setState(()=>({
            books
          }))
        })
    }
    // shelf=(book)=>{
    //   typeof(book.shelf)==='undifined'
    //   ?this.shelf ='none'
    //   :this.shelf=book.shelf
    // }
    
    nextPath(path) {
        this.props.history.push(path);
      }
    render(){
        const {query} =this.state
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.nextPath('/')}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" 
                value={query}
                onChange={(event)=>{
                    if(event.target.value.length>0){
                        this.updateQuery(event.target.value)
                        console.log("---->"+event.target.value);
                    }else{
                        this.setState(()=>({
                            books:[],
                            query:''
                        }))
                    }
                }}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.books.length>0&&
                    this.state.books.map((book)=>(
                      typeof(book.imageLinks) === 'undefined'
                      ?console.log('ommited book' + book.shelf)
                      :typeof(book.shelf) === 'undefined'
                      ?<Book 
                      key={book.id}
                      book={book}
                      title={book.title} 
                      authors={book.authors}
                      imageLinks={book.imageLinks.thumbnail} 
                      shelf={this.state.shelf}/>
                      :<Book 
                      key={book.id}
                      book={book}
                      title={book.title} 
                      authors={book.authors}
                      imageLinks={book.imageLinks.thumbnail} 
                      shelf={book.shelf}/>
                  )
                )
              }
              
              </ol>
            </div>
          </div>
        
        )
    }
}
export default Search;