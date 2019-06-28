import React from 'react'

class TotalPrice extends React.Component {

// console.log('TOTALPRICE')
    
total = Object.keys(this.state.selected)
.reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);
}

export default TotalPrice