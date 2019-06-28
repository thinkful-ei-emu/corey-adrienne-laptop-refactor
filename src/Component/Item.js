import React from 'react'
import Specs from './Specs'

class Item extends React.Component {

render(){
  console.log(this.props.key);
return(
<li key={this.props.index} className="feature__item">
      <div className={this.props.featureClass}
        onClick={e => this.props.updateFeature(this.props.category, this.props.item)}>
          { this.props.item.name }
          ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(this.props.item.cost) })
      </div>
</li>
)}
}

export default Item
