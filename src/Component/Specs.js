import React from 'react'
import Item from './Item'

class Specs extends React.Component {
    render(){
    const features = Object.keys(this.props.features)
        .map(key => {
            const options = this.props.features[key].map((item, index) => {
            const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return <Item/>
            });
        })
        return <div className="feature" key={key}>
                <div className="feature__name">{key}</div>
                <ul className="feature__list">
                { options }
                </ul>
                </div>
}

// console.log('SPECS')
}

export default Specs