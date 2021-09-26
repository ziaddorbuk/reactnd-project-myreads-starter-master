import React, { Component } from "react";
import Shelf from './shelf'

class Home extends Component{
    nextPath(path) {
        this.props.history.push(path);
      }
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title='Curently Reading' type='currentlyReading'/>
                <Shelf title='Want to Read' type='wantToRead'/>
                <Shelf title='Read' type='read'/>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.nextPath('/search') } >Add a book</button>
            </div>
          </div>
        
        )
    }
}
export default Home;