import React, { Component } from 'react'
import SearchBar from '../search-bar'
import ProductTable from '../product-table'
import ProductCategoryRow from '../product-category-row'

import './filterable-product-table.css'

export default class FilterableProductTable extends Component {
  state = {
    text: '',
    checked: false
  }
  onSearchName = text => {
    this.setState({ text })
  }
  search (items, text) {
    if (text.length === 0) return items
    return items.filter(item =>
      item.name.toUpperCase().includes(text.toUpperCase())
    )
  }
  onChecked = items => {
    return items.filter(item => !item.stocked) || items
  }
  stockCheked = checked => {
    this.setState({ checked: !this.state.checked })
  }
  render () {
    const { product } = this.props
    const { text, checked } = this.state
    const visbileItem = this.search(product, text)
    const stocked = checked ? this.onChecked(visbileItem) : visbileItem

    return (
      <div className='filterable-product-table'>
        <SearchBar
          text={text}
          checked={checked}
          stockCheked={this.stockCheked}
          onSearchName={this.onSearchName}
        />
        <div className='list-group'>
          <ProductTable />
          <ProductCategoryRow product={stocked} />
        </div>
      </div>
    )
  }
}
