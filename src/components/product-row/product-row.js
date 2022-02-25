import React, { Component } from 'react'
import './product-row.css'

export default class ProductRow extends Component {
  maxkey = 100
  render () {
    const { product } = this.props
    let name, newarr
    let arr = []
    product.map(item => {
      name = item.stocked ? (
        item.name
      ) : (
        <span style={{ color: 'red' }}>{item.name}</span>
      )
      arr.push([name, item.price])
      return name
    })
    newarr = arr.map(item => {
      return (
        <div key={this.maxkey++} className='span1'>
          <div className='span2 span3'>{item[0]}</div>

          <div className='span2'>{item[1]}</div>
        </div>
      )
    })

    return <div>{newarr}</div>
  }
}
