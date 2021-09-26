import React, {Component} from "react";
import * as BooksAPI from './BooksAPI'
class Book extends Component{
  // handleChange=(book)=>{
  //   BooksAPI.update(this.props.book,'none')
  //   // .then(window.location.reload())
  // }
  handleChange=async e=>{
    try{
      const shelf = e.target.value;
      await BooksAPI.update(this.props.book,shelf)
      window.location.href='/'
    }catch(err){
      console.log('error'+err);
    }
  }
    render(){
        return(
            <li>
                 <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={this.handleChange} value={this.props.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.title}</div>
                          <div className="book-authors">{this.props.authors}</div>
                        </div>
            </li>
        )
    }
}
export default Book;