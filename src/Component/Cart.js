import React from 'react'
import TotalPrice from './TotalPrice'

class AddToCart extends React.Component {

// console.log('ADDtoCART')

    render(){
        return (
        summary = Object.keys(this.state.selected)
            .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{this.state.selected[key].name}</div>
            <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.state.selected[key].cost) }
            </div>
        </div>)
        )   
    }
}
export default AddToCart