import React from 'react'
import Item from './Item'

class Specs extends React.Component {
    render(){
        console.log(this.props.features);
    const features = Object.keys(this.props.features).map(category => {
        const options = this.props.features[category].map((item, index) => {
            // console.log(key);
            const selectedClass = item.name === this.props.selected[category].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return <Item featureClass={featureClass} category={category} index={index} item={item} updateFeature={this.props.updateFeature}/>
        });
        return (
            <div className="feature" key={category}>
                <div className="feature__name">{category}</div>
                <ul className="feature__list">
                    { options }
                </ul>
            </div>
        )
    })
    
    return <>{features}</>
    }
}


// const features = Object.keys(this.props.features)
//           .map(key => {
//             const options = this.props.features[key].map((item, index) => {
//               const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
//               const featureClass = 'feature__option ' + selectedClass;
//               return <li key={index} className="feature__item">
//                 <div className={featureClass}
                  
//                   onClick={e => this.updateFeature(key, item)}>
//                     { item.name }
//                     ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
//                       .format(item.cost) })
//                 </div>
//               </li>
//             });

//             return <div className="feature" key={key}>
//               <div className="feature__name">{key}</div>
//               <ul className="feature__list">
//                 { options }
//               </ul>
//             </div>
//           });      


export default Specs