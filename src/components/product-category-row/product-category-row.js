import React, { Component } from 'react'
import ProductRow from '../product-row'

import './product-category-row.css'

export default class ProductCategoryRow extends Component {
  maxkey = 100

  render () {
    const { product } = this.props
    const categoryName = new Set()
    for (let el of product) {
      categoryName.add(el.category)
    }
    const arr = [...categoryName]
    let result = []
    let mus
    for (let el of arr) {
      mus = product.filter(item => item.category === el)

      result.push(
        <div key={this.maxkey++}>
          <h3>{el}</h3>
          <div>
            <ProductRow product={mus} />
          </div>
        </div>
      )
    }

    return <div className='row list-group'>{result}</div>
  }
}
