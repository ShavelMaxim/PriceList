import React, { Component } from 'react'

import './search-bar.css'

export default class SearchBar extends Component {
  state = {
    text: ''
  }
  onSearchName = e => {
    const text = e.target.value
    this.setState({ text })
    this.props.onSearchName(text)
  }
  stockCheked = () => {
    this.props.stockCheked(this.props.checked)
  }
  render () {
    return (
      <div className='search-bar'>
        <h1> Price List</h1>
        <input
          type='text'
          value={this.state.text}
          onChange={this.onSearchName}
          placeholder='Search...'
        />
        <p>
          <input type='checkbox' onClick={this.stockCheked} />
          Only show products in stock
        </p>
      </div>
    )
  }
}
