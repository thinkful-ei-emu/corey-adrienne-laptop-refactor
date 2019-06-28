import React from 'react'
import Specs from './Specs'

class Item extends React.Component {

render(){
  
return(
<li key={this.props.index} className="feature__item">
      <div className={this.props.featureClass}
        
        onClick={e => this.updateFeature(this.props.key, this.props.item)}>
          { this.props.item.name }
          ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(this.props.item.cost) })
      </div>
</li>
)}
}

export default Item