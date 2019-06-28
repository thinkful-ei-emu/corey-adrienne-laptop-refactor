import React from 'react'

class Item extends React.Component {
// console.log('ITEM')

render(){
return(
<li key={index} className="feature__item">
      <div className={featureClass}
        
        onClick={e => this.updateFeature(key, item)}>
          { item.name }
          ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(item.cost) })
      </div>
</li>
)}
}

export default Item