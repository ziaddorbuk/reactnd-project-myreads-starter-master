import React, { Component } from "react";
import * as BooksAPI from './BooksAPI'
import Book from "./Book";
class Search extends Component{
    state ={
        query:'',
        books:[]
    }
    updateQuery=(query)=>{
        this.setState(()=>({
            query:query.trim()
        }))
        BooksAPI.search(query)
        .then((books)=>{
          this.setState(()=>({
            books
          }))
        })
    }
    
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
                    <Book 
                    book={book}
                    title={book.title} 
                    imageLinks={book.imageLinks.thumbnail} 
                    authors={book.authors}
                    shelf={"none"}/>
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