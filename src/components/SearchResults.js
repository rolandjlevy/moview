import React from 'react';
import cx from "classnames";

class SearchResults extends React.Component {

    constructor () {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (event) {
        this.props.receiveMovieID(event.target.id)
    }

    render () {

        const classes = cx({
          "search-results": this.props.searchDisplay,
          "search-results-hidden": !this.props.searchDisplay
        })

        return (
        <div className={classes}>
            {
            this.props.resultsArray.map(movie => {
                return  <div 
                            className="search-item" 
                            key={movie.imdbID} 
                            onMouseDown={this.handleClick}
                            id={movie.imdbID}
                        >
                        {movie.Title}
                        </div>
                })
            }
        </div>
        )
    }
}

export default SearchResults