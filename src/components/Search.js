import React from 'react';

class Search extends React.Component {
    constructor () {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleChange (event) {
        this.props.receiveInput(event.target.value)
    }

    handleSubmit (event) {
        event.preventDefault()
        this.props.receiveSubmit()
    }

    handleFocus () {
        this.props.receiveFocus()
    }

    handleBlur () {
        this.props.receiveBlur()
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    id="search" 
                    onChange={this.handleChange} 
                    onFocus={this.handleFocus} 
                    onBlur={this.handleBlur} 
                    className="search" 
                    placeholder="Search for a movie..." 
                    autoComplete="off" 
                />
                
            </form>
        )
    }
}

export default Search;
